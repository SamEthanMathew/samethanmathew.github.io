import type { Route } from "./+types/blogs";
import { SectionPlaceholder } from "../components/SectionPlaceholder";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Blogs — Sam Mathew" }];
}

export default function Blogs() {
  return <SectionPlaceholder title="Blogs" />;
}
