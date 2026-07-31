import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/about";
import { site } from "../data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Me — Sam Mathew" },
    {
      name: "description",
      content:
        "Sam Mathew — robot learning at CMU. Teaching robots to know what they don't know.",
    },
  ];
}

const gallery = [
  { src: "/images/pfp.jpg", alt: "Sam Mathew", caption: "Sam Mathew" },
  {
    src: "/images/about-sf.jpg",
    alt: "Sam at the Palace of Fine Arts in San Francisco",
    caption: "@Palace of Fine Arts",
  },
  {
    src: "/images/about-field.jpg",
    alt: "Sam in a golden hillside field, arms outstretched",
    caption: "@Hunters Point",
  },
  {
    src: "/images/about-tahoe.jpg",
    alt: "Sam and his golden retriever at Lake Tahoe",
    caption: "@Lake Tahoe",
  },
  {
    src: "/images/about-cars.jpg",
    alt: "Sam beside a Pagani Huayra BC at a car show",
    caption: "@Pittsburgh Vintage Grand Prix",
  },
];

const work = [
  {
    label: "Research",
    body: "CMU Robotics Institute, R-PAD Lab under Prof. David Held. Uncertainty-guided world-model adaptation for robotic tool use, validated on a real Franka Panda arm. Paper submitted to CoRL 2026.",
  },
  {
    label: "Engineering",
    body: "Robotics Simulation Engineer at OpenDroids, porting the R2D3 dual-arm mobile manipulator into NVIDIA Isaac Sim and building the Python control SDK that drives it.",
  },
  {
    label: "Leading",
    body: "Head of AI at ScottyLabs' Labrador Incubator, helping student teams take projects from idea to something that actually runs.",
  },
];

/**
 * Tracks which gallery image is active based on how far the visitor has scrolled
 * through the section, so the sticky portrait cross-fades as they read.
 */
function useScrollGallery(count: number) {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setIndex(Math.min(count - 1, Math.floor(progress * count)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [count]);

  return { ref, index };
}

export default function About() {
  const { ref, index } = useScrollGallery(gallery.length);

  return (
    <section ref={ref} className="min-h-screen bg-paper py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-base uppercase tracking-[0.18em] text-muted mb-5">
            // About Me
          </p>

          <div className="grid lg:grid-cols-[minmax(320px,460px)_1fr] gap-12 lg:gap-20 items-start">
            {/* Portrait — stays put, cross-fades as the text scrolls, colors on hover */}
            <div className="lg:sticky lg:top-28 self-start">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
                {gallery.map((img, i) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    aria-hidden={i !== index}
                    className={`absolute inset-0 h-full w-full object-cover grayscale transition duration-700 ease-in-out group-hover:grayscale-0 motion-reduce:transition-none ${
                      i === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-5 font-mono text-base uppercase tracking-widest text-muted">
                {gallery[index].caption}
              </p>
              <p className="mt-3 text-base italic text-muted/70">
                The people around me always bring the color.
              </p>
              <p className="mt-1 font-mono text-sm uppercase tracking-widest text-muted/50">
                Hover over the image to bring color
              </p>
            </div>

            {/* The story — the only part that moves */}
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink leading-[1.05] mb-8">
                Teaching robots to know what they don&rsquo;t know.
              </h1>
              <p className="text-xl md:text-2xl text-muted leading-relaxed mb-16">
                I&rsquo;m Sam &mdash; a junior at Carnegie Mellon studying Statistics &amp;
                Machine Learning with an additional major in Artificial Intelligence. I spend
                most of my time on robot learning, specifically the part I find most
                interesting: getting robots to recognize when their own predictions are about
                to fail, and adapt before they break something.
              </p>

              <div className="mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-8">
                  What I&rsquo;m working on
                </h2>
                <div className="space-y-8">
                  {work.map((item) => (
                    <div key={item.label} className="border-l-2 border-line pl-6">
                      <h3 className="font-mono text-base uppercase tracking-widest text-ink mb-2">
                        {item.label}
                      </h3>
                      <p className="text-xl text-muted leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-6">
                  Teaching is the other half of it
                </h2>
                <p className="text-xl text-muted leading-relaxed">
                  I mentor RoboRoar (FTC Team 30449), an all-girls middle school robotics team,
                  and it&rsquo;s easily the most rewarding thing on this list. There&rsquo;s a
                  specific moment when a twelve-year-old stops asking whether she&rsquo;s
                  allowed to touch the code and just starts writing it &mdash; I&rsquo;d rather
                  engineer for that than almost anything. The same instinct is why I write
                  things up, give lab talks, and explain what I learn to anyone who&rsquo;ll sit
                  still for it. If I can&rsquo;t teach it, I don&rsquo;t understand it yet.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-6">
                  Off the clock
                </h2>
                <p className="text-xl text-muted leading-relaxed">
                  I explore compulsively &mdash; new cities, trailheads, weird restaurants,
                  ideas well outside my lane. I&rsquo;m a brother, a lifelong student, and the
                  very proud human of a golden retriever who is convinced she&rsquo;s also a
                  researcher. I&rsquo;ll happily lose a weekend to Formula 1 and the engineering
                  rabbit holes it opens &mdash; the aero, the strategy, the obsessive hunt for
                  tenths &mdash; and I love cars far more than my budget does. Somewhere in the
                  gaps I play guitar and ukulele badly but enthusiastically, build models for
                  fun, and lose to my friends at games I claimed I was good at.
                </p>
              </div>

              <p className="border-t border-line pt-8 font-display text-2xl md:text-3xl text-ink leading-snug">
                Long-term: a PhD and a research career in embodied AI, building robots that are
                reliable enough to actually live in the world with us.
              </p>

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
