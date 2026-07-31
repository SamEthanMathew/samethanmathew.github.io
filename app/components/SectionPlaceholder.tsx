import { Link } from "react-router";

/** Themed placeholder for a section page that hasn't been built out yet. */
export function SectionPlaceholder({ title }: { title: string }) {
  return (
    <section className="min-h-screen bg-paper flex items-center">
      {/* Left padding leaves room for the fixed WheelNav */}
      <div className="w-full pl-[min(60vw,320px)] pr-8">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">In progress</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-ink mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted mb-10">
            This section is coming soon.
          </p>
          <Link
            to="/#explore"
            className="font-mono text-sm uppercase tracking-widest text-muted hover:text-ink transition-colors"
          >
            &larr; Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
