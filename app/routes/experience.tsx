import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/experience";
import { experiences } from "../data/experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experience — Sam Mathew" },
    { name: "description", content: "Where Sam Mathew has worked — research, engineering, and leadership." },
  ];
}

/** Tracks which card is crossing the vertical center of the viewport. */
function useCenteredIndex(count: number) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      // A 1px band at the vertical center — the card crossing it is "active".
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  return { refs, active };
}

export default function Experience() {
  const { refs, active } = useCenteredIndex(experiences.length);

  const scrollTo = (i: number) =>
    refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <section className="min-h-screen bg-paper py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[minmax(300px,400px)_1fr] gap-12 lg:gap-24 items-start">
          {/* Sticky index — stays put while the cards scroll */}
          <div className="md:sticky md:top-28 self-start">
            <p className="font-mono text-base uppercase tracking-[0.18em] text-muted mb-5">
              // Experience
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.05] mb-12">
              Where I&rsquo;ve worked.
            </h1>

            <ol className="space-y-4">
              {experiences.map((exp, i) => {
                const isActive = i === active;
                return (
                  <li key={exp.company}>
                    <button
                      type="button"
                      onClick={() => scrollTo(i)}
                      className="group flex w-full items-baseline gap-4 text-left"
                    >
                      <span
                        className={`font-mono text-sm tabular-nums transition-colors ${
                          isActive ? "text-ink" : "text-muted/50"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`font-display text-xl transition-colors ${
                          isActive
                            ? "text-ink"
                            : "text-muted/50 group-hover:text-muted"
                        }`}
                      >
                        {exp.short}
                      </span>
                      <span
                        aria-hidden
                        className={`ml-auto h-px self-center bg-ink transition-all duration-500 ${
                          isActive ? "w-10 opacity-100" : "w-0 opacity-0"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="mt-14">
              <Link
                to="/#explore"
                className="font-mono text-base uppercase tracking-widest text-muted hover:text-ink transition-colors"
              >
                &larr; Back home
              </Link>
            </div>
          </div>

          {/* Scrolling cards */}
          <div className="space-y-10 md:space-y-14">
            {experiences.map((exp, i) => {
              const isActive = i === active;
              return (
                <article
                  key={exp.company}
                  data-index={i}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  className={`scroll-mt-28 rounded-sm border bg-paper-2 p-8 md:p-12 transition-all duration-500 ${
                    isActive
                      ? "border-ink shadow-[0_18px_40px_-24px_rgba(35,35,32,0.35)]"
                      : "border-line"
                  }`}
                >
                  <p className="font-mono text-sm tabular-nums uppercase tracking-widest text-muted mb-4">
                    {exp.start} &mdash; {exp.end}
                  </p>

                  <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-ink leading-tight mb-2">
                    {exp.company}
                  </h2>

                  <p className="font-display text-xl md:text-2xl text-muted mb-8">
                    {exp.position}
                  </p>

                  <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-sm uppercase tracking-wider text-muted border border-line rounded-sm px-3 py-1.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
