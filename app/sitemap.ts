import type { MetadataRoute } from "next";
import { boardMembers, news } from "@/data";
import { SITE_URL } from "@/lib/constants";
import { slugify } from "@/lib/utils";

const staticPaths = [
  "",
  "/about",
  "/programs",
  "/impact",
  "/news",
  "/gallery",
  "/donate",
  "/sponsor",
  "/volunteer",
  "/contact",
  "/cgc",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticPaths.map((path) => ({ url: `${SITE_URL}${path}` }));

  const articles = news.map((n) => {
    const date = new Date(n.date);
    return {
      url: `${SITE_URL}/news/${n.id}`,
      ...(isNaN(date.getTime()) ? {} : { lastModified: date }),
    };
  });

  const board = boardMembers.map((m) => ({
    url: `${SITE_URL}/board/${slugify(m.name)}`,
  }));

  return [...pages, ...articles, ...board];
}
