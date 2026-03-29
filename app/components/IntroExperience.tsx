import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { ParticleOrb } from "./ParticleOrb";

const HOLD_MS = 1300;
/** Longer + ease-in-out curve so the handoff feels softer */
const FADE_MS = 1700;

type Phase = "hold" | "fade";

export function IntroExperience({ children }: { children: React.ReactNode }) {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("hold");

  useLayoutEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      setOverlayVisible(false);
      return;
    }

    document.documentElement.classList.add("intro-active");

    const toFade = window.setTimeout(() => setPhase("fade"), HOLD_MS);
    const finish = window.setTimeout(() => {
      setOverlayVisible(false);
      document.documentElement.classList.remove("intro-active");
    }, HOLD_MS + FADE_MS);

    return () => {
      window.clearTimeout(toFade);
      window.clearTimeout(finish);
      document.documentElement.classList.remove("intro-active");
    };
  }, []);

  return (
    <>
      {children}
      <AnimatePresence>
        {overlayVisible ? (
          <motion.div
            key="intro-overlay"
            className="intro-overlay fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "fade" ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={
              phase === "fade"
                ? {
                    duration: FADE_MS / 1000,
                    ease: [0.42, 0, 0.58, 1],
                  }
                : { duration: 0 }
            }
          >
            <div className="relative z-[2] flex items-center justify-center">
              <ParticleOrb />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
