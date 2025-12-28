import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | DDoSim - Cybersecurity Articles and Guides",
  description:
    "Explore our collection of cybersecurity articles, DDoS attack guides, network security best practices, and educational content.",
  openGraph: {
    title: "Blog | DDoSim",
    description:
      "Explore our collection of cybersecurity articles, DDoS attack guides, network security best practices, and educational content.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

