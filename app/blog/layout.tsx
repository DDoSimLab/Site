import type { Metadata } from "next";
import {
  SITE_METADATA,
  ROUTES,
  SITE_METADATA as METADATA,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_METADATA.TITLE.BLOG,
  description: SITE_METADATA.DESCRIPTION.BLOG,
  openGraph: {
    title: SITE_METADATA.TITLE.BLOG,
    description: SITE_METADATA.DESCRIPTION.BLOG,
    type: METADATA.OPEN_GRAPH.TYPE,
    url: ROUTES.BLOG,
  },
  alternates: {
    canonical: ROUTES.BLOG,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
