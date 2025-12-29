import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogs";
import { SITE_URLS, SITEMAP, ROUTES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URLS.BASE}${ROUTES.BLOG_SLUG(post.slug)}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: SITEMAP.BLOG_POST.CHANGE_FREQUENCY,
    priority: SITEMAP.BLOG_POST.PRIORITY,
  }));

  return [
    {
      url: SITE_URLS.BASE,
      lastModified: new Date(),
      changeFrequency: SITEMAP.HOME.CHANGE_FREQUENCY,
      priority: SITEMAP.HOME.PRIORITY,
    },
    {
      url: `${SITE_URLS.BASE}${ROUTES.BLOG}`,
      lastModified: new Date(),
      changeFrequency: SITEMAP.BLOG.CHANGE_FREQUENCY,
      priority: SITEMAP.BLOG.PRIORITY,
    },
    ...blogEntries,
  ];
}

