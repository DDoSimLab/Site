import type { MetadataRoute } from "next";
import { SITE_URLS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URLS.BASE}/sitemap.xml`,
  };
}
