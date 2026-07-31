import { useNavigate } from "react-router";
import OptionWheel from "./OptionWheel";
import { sections } from "../data/sections";

const labels = sections.map((s) => s.label);

/** Full-screen "select a section" wheel with an inviting passage alongside it. */
export function WheelSection() {
  const navigate = useNavigate();

  return (
    <section id="explore" className="relative min-h-screen bg-ink overflow-hidden">
      {/* The wheel fills the slab; options curve up from the left edge */}
      <div className="absolute inset-0">
        <OptionWheel
          items={labels}
          defaultSelected={Math.floor(labels.length / 2)}
          side="left"
          fontSize={5}
          spacing={1.3}
          tilt={6}
          curve={1}
          inset={96}
          blur={2}
          fade={0.3}
          releaseAtEnds
          textColor="#77766e"
          activeColor="#fafaf8"
          onActivate={(index) => navigate(sections[index].path)}
        />
      </div>

      {/* Invitation, right-aligned and vertically centered */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden xl:flex items-center">
        <div className="max-w-2xl pr-10 lg:pr-20 text-right">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-line/50 mb-5">
            // where to begin
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-paper leading-tight mb-6">
            Memory isn&rsquo;t a line. It&rsquo;s a wheel.
          </h2>
          <p className="text-2xl text-line/60 leading-relaxed mb-8">
            We don&rsquo;t live in order &mdash; we live in fragments that keep circling
            back. Spin through mine: the things I&rsquo;ve built, the questions I chase, the
            corners I return to for no reason at all. Start anywhere, and let curiosity
            choose.
          </p>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-line/30">
            scroll &middot; drag &middot; click to open
          </p>
        </div>
      </div>
    </section>
  );
}
