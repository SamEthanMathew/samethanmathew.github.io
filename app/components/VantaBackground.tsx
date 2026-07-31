import { useEffect, useRef } from "react";

interface VantaBackgroundProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/** Minimal shape of the Vanta effect instance we rely on. */
interface VantaEffect {
  destroy: () => void;
}

declare global {
  interface Window {
    VANTA?: { NET: (opts: Record<string, unknown>) => VantaEffect };
    THREE?: unknown;
  }
}

const VANTA_NET_OPTIONS = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xe8e6e0,
  backgroundColor: 0x232320,
  points: 13.0,
  maxDistance: 24.0,
  spacing: 20.0,
} as const;

/** Wraps children in the animated Vanta NET background (three.js + vanta from CDN). */
export function VantaBackground({ children, className = "", id }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);

  useEffect(() => {
    const initVanta = () => {
      if (!window.VANTA || !window.THREE || !vantaRef.current) return;
      vantaEffect.current?.destroy();
      // Drop any stale canvas a previous effect (e.g. across HMR) left behind
      // so recolors take effect and canvases never stack.
      vantaRef.current
        .querySelectorAll(":scope > canvas")
        .forEach((canvas) => canvas.remove());
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        ...VANTA_NET_OPTIONS,
      });
    };

    // The CDN scripts may still be loading; poll briefly until they are ready.
    if (window.VANTA && window.THREE) {
      initVanta();
    } else {
      const checkScripts = setInterval(() => {
        if (window.VANTA && window.THREE) {
          clearInterval(checkScripts);
          initVanta();
        }
      }, 100);
      const stop = setTimeout(() => clearInterval(checkScripts), 10000);
      return () => {
        clearInterval(checkScripts);
        clearTimeout(stop);
        vantaEffect.current?.destroy();
      };
    }

    return () => vantaEffect.current?.destroy();
  }, []);

  return (
    <div id={id} ref={vantaRef} className={`vanta-background ${className}`}>
      {children}
    </div>
  );
}
