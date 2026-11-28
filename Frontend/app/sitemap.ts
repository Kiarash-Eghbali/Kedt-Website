import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kedt.ir";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about-me`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact-me`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
