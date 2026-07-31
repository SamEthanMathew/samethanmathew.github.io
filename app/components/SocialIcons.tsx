import { socials, isExternal } from "../data/socials";

/** Row of social icons shown in the hero. */
export default function SocialIcons() {
  return (
    <div className="flex justify-center gap-6 mt-4">
      {socials.map((social) => {
        const Icon = social.icon;
        const external = isExternal(social.href);
        return (
          <a
            key={social.label}
            href={social.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-line/70 hover:text-paper transition-colors duration-300"
            aria-label={social.label}
          >
            <Icon size={28} className="hover:scale-110 transition-transform duration-300" />
          </a>
        );
      })}
    </div>
  );
}
