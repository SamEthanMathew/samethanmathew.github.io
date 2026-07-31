import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/projects";
import { CATEGORIES, type Category, projects } from "../data/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects — Sam Mathew" },
    { name: "description", content: "Projects by Sam Mathew across SWE, AI/ML, Robotics, Data Science, and Quant." },
  ];
}

export default function Projects() {
  const [category, setCategory] = useState<Category>("All");
  const [open, setOpen] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered =
    category === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(category));

  // The category's skill set = every skill used by its projects (in first-seen order).
  const categorySkills: string[] = [];
  filtered.forEach((p) =>
    p.skills.forEach((s) => {
      if (!categorySkills.includes(s)) categorySkills.push(s);
    }),
  );

  const hoveredSkills = hovered
    ? projects.find((p) => p.title === hovered)?.skills ?? null
    : null;

  return (
    <section className="min-h-screen bg-paper py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-base uppercase tracking-[0.18em] text-muted mb-5">
            // Projects
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink leading-[1.05] mb-10">
            Things I&rsquo;ve built.
          </h1>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2.5 mb-14 border-b border-line pb-10">
            {CATEGORIES.map((cat) => {
              const active = cat === category;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setCategory(cat);
                    setOpen(null);
                  }}
                  className={`font-mono text-sm uppercase tracking-wider rounded-full px-5 py-2 transition-colors ${
                    active
                      ? "bg-ink text-paper"
                      : "border border-line text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[minmax(220px,280px)_1fr] gap-12 lg:gap-20 items-start">
            {/* Skills panel — highlights on project hover (desktop only) */}
            <div className="hidden lg:block lg:sticky lg:top-28 self-start">
              <p className="font-mono text-sm uppercase tracking-widest text-muted mb-6">
                Skills
              </p>
              <ul className="space-y-2.5">
                {categorySkills.map((skill) => {
                  const lit = hoveredSkills?.includes(skill);
                  const dim = hoveredSkills && !lit;
                  return (
                    <li
                      key={skill}
                      className={`font-display text-lg transition-colors duration-200 ${
                        lit ? "text-ink" : dim ? "text-muted/30" : "text-muted"
                      }`}
                    >
                      {skill}
                    </li>
                  );
                })}
                {categorySkills.length === 0 && (
                  <li className="text-muted/50">&mdash;</li>
                )}
              </ul>
            </div>

            {/* Project list */}
            <div>
              {filtered.length === 0 ? (
                <p className="text-xl text-muted/70">
                  No {category} projects here yet &mdash; more on the way.
                </p>
              ) : (
                <div className="border-t border-line">
                  {filtered.map((project) => {
                    const expanded = open === project.title;
                    return (
                      <article
                        key={project.title}
                        onMouseEnter={() => setHovered(project.title)}
                        onMouseLeave={() => setHovered(null)}
                        className="border-b border-line"
                      >
                        <button
                          type="button"
                          onClick={() => setOpen(expanded ? null : project.title)}
                          aria-expanded={expanded}
                          className="group w-full text-left py-8"
                        >
                          <div className="flex items-start justify-between gap-6">
                            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                              {project.title}
                            </h2>
                            <span
                              aria-hidden
                              className={`mt-1 shrink-0 font-mono text-2xl text-muted transition-transform duration-300 ${
                                expanded ? "rotate-45" : ""
                              }`}
                            >
                              +
                            </span>
                          </div>

                          {project.award && (
                            <p className="mt-4 inline-block font-mono text-[0.7rem] uppercase tracking-wider text-ink border border-ink rounded-sm px-2.5 py-1">
                              &#9733; {project.award}
                            </p>
                          )}

                          <p className="mt-3 text-lg text-muted leading-relaxed">
                            {project.blurb}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.skills.map((skill) => (
                              <span
                                key={skill}
                                className="font-mono text-xs uppercase tracking-wider text-muted border border-line rounded-sm px-2.5 py-1"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </button>

                        {/* Expanding panel */}
                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            expanded
                              ? "grid-rows-[1fr] opacity-100 pb-8"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-lg md:text-xl text-muted leading-relaxed">
                              {project.description}
                            </p>
                            {project.links.length > 0 ? (
                              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm uppercase tracking-widest">
                                {project.links.map((link) => (
                                  <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-ink hover:text-muted transition-colors"
                                  >
                                    {link.label}
                                    <span aria-hidden className="ml-1 inline-block">
                                      &rarr;
                                    </span>
                                  </a>
                                ))}
                              </div>
                            ) : project.privateRepo ? (
                              <p className="mt-6 font-mono text-sm uppercase tracking-widest text-muted/50">
                                Private repository
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              <div className="mt-16">
                <Link
                  to="/#explore"
                  className="font-mono text-base uppercase tracking-widest text-muted hover:text-ink transition-colors"
                >
                  &larr; Back home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
