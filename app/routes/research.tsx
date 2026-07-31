import { Link } from "react-router";
import type { Route } from "./+types/research";
import {
  type ResearchEntry,
  currentResearch,
  pastResearch,
  problemStatements,
  researchInterest,
} from "../data/research";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research — Sam Mathew" },
    {
      name: "description",
      content:
        "Sam Mathew's research — reliable robot learning with world models, VLMs, and uncertainty.",
    },
  ];
}

function EntryCard({ entry, highlight }: { entry: ResearchEntry; highlight?: boolean }) {
  return (
    <article
      className={`rounded-sm border bg-paper-2 p-8 md:p-10 ${
        highlight ? "border-ink shadow-[0_18px_40px_-24px_rgba(35,35,32,0.35)]" : "border-line"
      }`}
    >
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink">
          {entry.title}
        </h3>
        <p className="font-mono text-sm tabular-nums uppercase tracking-widest text-muted whitespace-nowrap">
          {entry.period}
        </p>
      </div>

      <p className="font-mono text-sm uppercase tracking-widest text-muted mb-6">
        {entry.lab}
        {entry.advisor ? ` · ${entry.advisor}` : ""}
      </p>

      <p className="text-lg md:text-xl text-muted leading-relaxed mb-7">{entry.summary}</p>

      <div className="flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-sm uppercase tracking-wider text-muted border border-line rounded-sm px-3 py-1.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {entry.status && (
        <p className="mt-6 font-mono text-sm text-muted/80">{entry.status}</p>
      )}

      {entry.links && entry.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm uppercase tracking-widest">
          {entry.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-muted transition-colors"
            >
              {link.label} <span aria-hidden>&rarr;</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Research() {
  return (
    <section className="min-h-screen bg-paper py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[minmax(300px,400px)_1fr] gap-12 lg:gap-24 items-start">
          {/* Sticky statement — stays put while the sections scroll */}
          <div className="md:sticky md:top-28 self-start">
            <p className="font-mono text-base uppercase tracking-[0.18em] text-muted mb-5">
              // Research
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.05] mb-8">
              Robots that catch their own mistakes.
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-12">{researchInterest}</p>
            <Link
              to="/#explore"
              className="font-mono text-base uppercase tracking-widest text-muted hover:text-ink transition-colors"
            >
              &larr; Back home
            </Link>
          </div>

          {/* Content */}
          <div className="space-y-20">
            {/* Problem statements */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-10">
                Problem statements
              </h2>
              <ol className="space-y-8">
                {problemStatements.map((statement, i) => (
                  <li key={i} className="flex gap-5 border-l-2 border-line pl-6">
                    <span className="font-mono text-base tabular-nums text-muted pt-1">
                      0{i + 1}
                    </span>
                    <p className="text-xl md:text-2xl text-ink leading-snug">{statement}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Current research */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-10">
                Current research
              </h2>
              <div className="space-y-8">
                {currentResearch.map((entry) => (
                  <EntryCard key={entry.title} entry={entry} highlight />
                ))}
              </div>
            </div>

            {/* Past research */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-10">
                Past research
              </h2>
              <div className="space-y-8">
                {pastResearch.map((entry) => (
                  <EntryCard key={entry.title} entry={entry} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
