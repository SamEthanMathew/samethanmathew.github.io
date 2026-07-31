# Sam Mathew — Portfolio

Personal portfolio site for Sam Mathew (Statistics/ML + AI @ Carnegie Mellon University).
A single-page site with an animated intro, a Vanta NET hero background, and sections for
About, Projects, and Contact.

## Tech stack

- **React 19** + **React Router 7** (SPA mode — `ssr: false`)
- **Tailwind CSS v4**
- **Framer Motion** — intro overlay transition
- **Three.js** — the particle orb shown during the intro
- **Vanta NET** (loaded from CDN) — animated hero background
- Deployed on **Vercel** (static `build/client` output)

## Project structure

```
app/
  root.tsx              App shell: <head> links, Navbar, IntroExperience wrapper
  routes.ts             Route manifest (single index route)
  routes/home.tsx       The one page: Hero → About → Projects → Contact → Footer
  app.css               Tailwind entry + custom animations
  components/
    IntroExperience.tsx Fade-in intro overlay (respects prefers-reduced-motion)
    ParticleOrb.tsx     Three.js point-cloud orb shown during the intro
    VantaBackground.tsx Animated Vanta NET hero wrapper
    Navbar.tsx          Fixed top navigation
    ProjectCard.tsx     Single project card
    ContactCard.tsx     Single contact-method card
    SocialIcons.tsx     Hero social icon row
    ScrollAnimation.tsx IntersectionObserver reveal-on-scroll wrapper
  data/
    site.ts             Name, role, email, nav links
    projects.ts         Project cards content
    socials.ts          Social/contact links (shared by hero + contact)
public/
  images/               pfp.jpg, titleimage.png (favicon / SM monogram)
```

Content lives in `app/data/` — edit `projects.ts`, `socials.ts`, or `site.ts` to update the
site without touching layout code.

## Getting started

Install dependencies:

```bash
npm install
```

Start the dev server (http://localhost:5173):

```bash
npm run dev
```

## Building for production

```bash
npm run build      # outputs to build/client (static)
npm run typecheck  # react-router typegen + tsc
```

## Deployment

Configured for Vercel via `vercel.json` (static `build/client`). A `Dockerfile` is also
included for container-based hosting.
