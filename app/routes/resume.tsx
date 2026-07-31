import { Link } from "react-router";
import type { Route } from "./+types/resume";
import { type ResumeEntry, resume } from "../data/resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume — Sam Mathew" },
    { name: "description", content: "Sam Ethan Mathew — resume." },
  ];
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted border-b border-ink/70 pb-1.5 mb-4 print:mb-2">
      {children}
    </h2>
  );
}

function Entry({ entry }: { entry: ResumeEntry }) {
  return (
    <div className="mb-5 last:mb-0 print:mb-2.5">
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-display text-[0.95rem] font-semibold text-ink leading-snug print:text-[0.8rem]">
          {entry.title}
        </h3>
        <span className="shrink-0 font-mono text-[0.7rem] text-muted sm:whitespace-nowrap print:text-[0.62rem]">
          {entry.meta}
        </span>
      </div>
      {entry.org && (
        <p className="text-sm text-muted italic mb-1.5 print:text-[0.7rem] print:mb-1">
          {entry.org}
        </p>
      )}
      <ul className="mt-1 space-y-1.5 print:space-y-1">
        {entry.bullets.map((b, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-[0.85rem] leading-relaxed text-ink/85 print:text-[0.72rem] print:leading-snug print:gap-2"
          >
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted print:mt-1.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    <section className="min-h-screen bg-paper-2 py-16 md:py-20 print:bg-paper print:py-0">
      <div className="mx-auto max-w-[860px] px-6 print:max-w-none print:px-0">
        {/* Toolbar — hidden in print/PDF */}
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Link
            to="/#explore"
            className="font-mono text-sm uppercase tracking-widest text-muted hover:text-ink transition-colors"
          >
            &larr; Back home
          </Link>
          <a
            href="/Sam_Mathew_Resume.pdf"
            download
            className="btn-ink inline-block bg-ink text-paper font-mono text-sm uppercase tracking-widest px-6 py-2.5 rounded-sm"
          >
            Download PDF &darr;
          </a>
        </div>

        {/* The sheet */}
        <div className="bg-paper border border-line rounded-sm shadow-sm p-10 md:p-14 print:border-0 print:shadow-none print:rounded-none print:p-10">
          {/* Header */}
          <header className="text-center mb-8 print:mb-5">
            <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-ink mb-3 print:text-[1.7rem] print:mb-2">
              {resume.name}
            </h1>
            <p className="flex flex-wrap justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted print:text-[0.62rem]">
              {resume.contacts.map((c, i) => (
                <span key={c.href} className="flex gap-x-3">
                  {i > 0 && <span aria-hidden className="text-line">|</span>}
                  <a href={c.href} className="hover:text-ink transition-colors">
                    {c.label}
                  </a>
                </span>
              ))}
            </p>
          </header>

          {/* Education */}
          <section className="mb-7 print:mb-4">
            <SectionTitle>Education</SectionTitle>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-display text-[0.95rem] font-semibold text-ink print:text-[0.8rem]">
                {resume.education.school}
              </h3>
              <span className="shrink-0 font-mono text-[0.7rem] text-muted sm:whitespace-nowrap print:text-[0.62rem]">
                {resume.education.meta}
              </span>
            </div>
            <p className="text-sm text-muted italic mb-2 print:text-[0.7rem] print:mb-1">
              {resume.education.degree}
            </p>
            <p className="text-[0.85rem] text-ink/85 leading-relaxed print:text-[0.72rem] print:leading-snug">
              <span className="font-semibold text-ink">Coursework: </span>
              {resume.education.coursework}.
            </p>
            <p className="text-[0.85rem] text-ink/85 leading-relaxed mt-1 print:text-[0.72rem] print:leading-snug">
              <span className="font-semibold text-ink">Honors &amp; Awards: </span>
              {resume.education.honors}.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-7 print:mb-4">
            <SectionTitle>Internship &amp; Research Experience</SectionTitle>
            {resume.experience.map((e) => (
              <Entry key={e.title + e.meta} entry={e} />
            ))}
          </section>

          {/* Projects */}
          <section className="mb-7 print:mb-4">
            <SectionTitle>Projects</SectionTitle>
            {resume.projects.map((p) => (
              <Entry key={p.title} entry={p} />
            ))}
          </section>

          {/* Publications */}
          <section className="mb-7 print:mb-4">
            <SectionTitle>Publications</SectionTitle>
            {resume.publications.map((p) => (
              <Entry key={p.title} entry={p} />
            ))}
          </section>

          {/* Leadership */}
          <section className="mb-7 print:mb-4">
            <SectionTitle>Leadership</SectionTitle>
            {resume.leadership.map((l) => (
              <Entry key={l.title} entry={l} />
            ))}
          </section>

          {/* Skills */}
          <section>
            <SectionTitle>Skills</SectionTitle>
            <dl className="space-y-1.5">
              {resume.skills.map((s) => (
                <div key={s.group} className="flex gap-2 text-[0.85rem] leading-relaxed print:text-[0.72rem] print:leading-snug">
                  <dt className="font-semibold text-ink whitespace-nowrap">{s.group}:</dt>
                  <dd className="text-ink/85">{s.items}.</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
    </section>
  );
}
