/** Social / contact links, shared by the hero icons and the Contact section. */
import type { IconType } from "react-icons";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { site } from "./site";

export interface SocialLink {
  label: string;
  /** Text shown under the icon in the Contact section. */
  display: string;
  href: string;
  icon: IconType;
}

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    display: "linkedin.com/in/sam-mathew",
    href: "https://www.linkedin.com/in/sam-mathew-1a9778254/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    display: site.email,
    href: `mailto:${site.email}`,
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    display: "github.com/SamEthanMathew",
    href: "https://github.com/SamEthanMathew",
    icon: FaGithub,
  },
];

/** External links open in a new tab; mailto links stay in place. */
export function isExternal(href: string): boolean {
  return href.startsWith("http");
}
