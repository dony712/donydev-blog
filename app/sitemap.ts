import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.donydev-blog.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.donydev-blog.com/tentang",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.donydev-blog.com/ai/alat-ai-produktivitas",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.donydev-blog.com/ai/alat-ai-produktivitas/ai-keuangan",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.donydev-blog.com/ai/alat-ai-produktivitas/ai-nutrisi",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.donydev-blog.com/ai/alat-ai-produktivitas/ai-kreatif",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.donydev-blog.com/disclaimer",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.donydev-blog.com/privacy-policy",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.donydev-blog.com/terms-of-service",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
