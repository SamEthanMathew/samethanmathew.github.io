import { type SocialLink, isExternal } from "../data/socials";

/** A single contact method (icon + label + handle), styled for the ink slab. */
export function ContactCard({ social }: { social: SocialLink }) {
  const Icon = social.icon;
  const external = isExternal(social.href);

  return (
    <a
      href={social.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group block text-center"
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-line/25 text-paper transition-colors duration-300 group-hover:bg-paper group-hover:text-ink">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-lg font-semibold text-paper mb-1">
        {social.label}
      </h3>
      <p className="font-mono text-sm text-line/50 break-words">{social.display}</p>
    </a>
  );
}
