/** Primary navigation sections, ordered recruiter-first. Drives the OptionWheel. */

export interface Section {
  label: string;
  path: string;
}

export const sections: Section[] = [
  { label: "About Me", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Research", path: "/research" },
  { label: "Resume", path: "/resume" },
  { label: "Photography", path: "/photography" },
];
