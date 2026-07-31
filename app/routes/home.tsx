import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import type { Route } from "./+types/home";
import { VantaBackground } from "../components/VantaBackground";
import { WheelSection } from "../components/WheelSection";
import SocialIcons from "../components/SocialIcons";
import SplitText from "../components/SplitText";
import { site } from "../data/site";

/** True when the visitor prefers reduced motion — used to skip GSAP animations. */
function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduce;
}

const NAME_CLASS =
  "font-display font-bold tracking-tight text-paper text-6xl md:text-8xl leading-[0.95]";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sam Mathew - Portfolio" },
    {
      name: "description",
      content:
        "Statistics/Machine Learning and Artificial Intelligence @ Carnegie Mellon University - Full Stack Developer & AI Engineer",
    },
  ];
}

export default function Home() {
  const reduceMotion = usePrefersReducedMotion();
  const location = useLocation();

  // Arriving at /#explore (e.g. "Back home" from an inner page) lands on the wheel.
  useEffect(() => {
    if (location.hash !== "#explore") return;
    const el = document.getElementById("explore");
    if (!el) return;
    requestAnimationFrame(() => {
      window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY);
    });
  }, [location.hash]);

  return (
    <>
      {/* Hero — ink slab */}
      <VantaBackground
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-ink"
      >
        <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
          {/* First: the name lands with the background */}
          <p className="animate-fade-in-up animate-delay-1000 font-mono text-base md:text-lg uppercase tracking-[0.2em] text-line mb-8">
            Hello, I&rsquo;m
          </p>
          <div className="mb-8">
            {reduceMotion ? (
              <h1 className={NAME_CLASS}>{site.name}</h1>
            ) : (
              <SplitText
                text={site.name}
                tag="h1"
                className={NAME_CLASS}
                delay={45}
                duration={0.9}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
              />
            )}
          </div>
          {/* Second wave: everything else slides in once the name has settled */}
          <p className="animate-fade-in-up animate-delay-1200 text-xl md:text-2xl text-line/90 max-w-2xl mx-auto mb-10">
            {site.role}
          </p>

          <div className="animate-fade-in-up animate-delay-1400">
            <SocialIcons />
          </div>

          {/* Scroll indicator (wrapper handles centering so the slide-in transform is clean) */}
          <div className="absolute -bottom-24 inset-x-0 flex justify-center animate-fade-in-up animate-delay-1600">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-line/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-line/60 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </VantaBackground>

      {/* Navigate — the wheel */}
      <WheelSection />

      {/* Footer */}
      <footer className="bg-ink text-paper border-t border-white/10 py-10">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display font-bold tracking-tight text-paper">
            {site.name}
          </p>
          <p className="font-mono text-sm uppercase tracking-widest text-line/50">
            &copy; 2026 — All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
