import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ekosuryahadi.com";
  const routes = ["", "/about", "/projects", "/skills", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date() }))
  ];
}
