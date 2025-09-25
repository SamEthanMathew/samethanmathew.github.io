import { useEffect, useRef } from 'react';

interface VantaBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export function VantaBackground({ children, className = '' }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const initVanta = () => {
      if (window.VANTA && window.THREE && vantaRef.current) {
        // Clean up existing effect
        if (vantaEffect.current) {
          vantaEffect.current.destroy();
        }

        // Initialize new Vanta NET effect for hero section
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3b82f6,
          backgroundColor: 0x0a0a0a,
          points: 15.00,
          maxDistance: 25.00,
          spacing: 18.00
        });
      }
    };

    // Initialize when scripts are loaded
    if (window.VANTA && window.THREE) {
      initVanta();
    } else {
      // Wait for scripts to load
      const checkScripts = setInterval(() => {
        if (window.VANTA && window.THREE) {
          clearInterval(checkScripts);
          initVanta();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkScripts), 10000);
    }

    // Cleanup on unmount
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className={`vanta-background ${className}`}>
      {children}
    </div>
  );
}
