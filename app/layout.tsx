import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_URLS, SITE_METADATA, IMAGE_DIMENSIONS } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URLS.BASE),
  title: {
    default: SITE_METADATA.TITLE.DEFAULT,
    template: SITE_METADATA.TITLE.TEMPLATE,
  },
  description: SITE_METADATA.DESCRIPTION.DEFAULT,
  keywords: [...SITE_METADATA.KEYWORDS],
  openGraph: {
    type: SITE_METADATA.OPEN_GRAPH.TYPE,
    siteName: SITE_METADATA.NAME,
    url: SITE_URLS.BASE,
    title: SITE_METADATA.TITLE.DEFAULT,
    description: SITE_METADATA.DESCRIPTION.OPEN_GRAPH,
    images: [
      {
        url: SITE_METADATA.OPEN_GRAPH.IMAGE.URL,
        width: IMAGE_DIMENSIONS.OG_IMAGE.WIDTH,
        height: IMAGE_DIMENSIONS.OG_IMAGE.HEIGHT,
        alt: SITE_METADATA.OPEN_GRAPH.IMAGE.ALT,
      },
    ],
  },
  twitter: {
    card: SITE_METADATA.TWITTER.CARD,
    title: SITE_METADATA.TITLE.DEFAULT,
    description: SITE_METADATA.DESCRIPTION.TWITTER,
    images: [SITE_METADATA.OPEN_GRAPH.IMAGE.URL],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: SITE_METADATA.ROBOTS.INDEX,
    follow: SITE_METADATA.ROBOTS.FOLLOW,
    googleBot: {
      index: SITE_METADATA.ROBOTS.INDEX,
      follow: SITE_METADATA.ROBOTS.FOLLOW,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-svh`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col`}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
