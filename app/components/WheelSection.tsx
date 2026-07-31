import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import OptionWheel from "./OptionWheel";
import { sections } from "../data/sections";

const labels = sections.map((s) => s.label);

/** Scales the wheel's type/inset to the viewport so labels never clip. */
function useWheelMetrics() {
  const [m, setM] = useState({ fontSize: 5, inset: 96 });
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setM({ fontSize: 5, inset: 96 });
      else if (w >= 640) setM({ fontSize: 4, inset: 64 });
      else setM({ fontSize: 3, inset: 32 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return m;
}

/** Full-screen "select a section" wheel with an inviting passage alongside it. */
export function WheelSection() {
  const navigate = useNavigate();
  const { fontSize, inset } = useWheelMetrics();

  return (
    <section id="explore" className="relative min-h-screen bg-ink overflow-hidden">
      {/* The wheel: full width on small screens, left ~58% on lg+ (copy takes the rest) */}
      <div className="absolute inset-0 lg:right-[42%]">
        <OptionWheel
          items={labels}
          defaultSelected={Math.floor(labels.length / 2)}
          side="left"
          fontSize={fontSize}
          spacing={1.3}
          tilt={6}
          curve={1}
          inset={inset}
          blur={2}
          fade={0.3}
          releaseAtEnds
          textColor="#77766e"
          activeColor="#fafaf8"
          onActivate={(index) => navigate(sections[index].path)}
        />
      </div>

      {/* Invitation — its own column on the right (lg+), so it never overlaps the wheel */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] items-center pr-8 xl:pr-16 lg:flex">
        <div className="ml-auto max-w-md xl:max-w-lg text-right">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-line/50 mb-5">
            // where to begin
          </p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-paper leading-tight mb-6">
            Memory isn&rsquo;t a line. It&rsquo;s a wheel.
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-line/60 leading-relaxed mb-8">
            We don&rsquo;t live in order &mdash; we live in fragments that keep circling back.
            Spin through mine: the things I&rsquo;ve built, the questions I chase, the corners I
            return to for no reason at all. Start anywhere, and let curiosity choose.
          </p>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-line/30">
            scroll &middot; drag &middot; click to open
          </p>
        </div>
      </div>
    </section>
  );
}
