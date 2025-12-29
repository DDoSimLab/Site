import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ddosim.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "DDoSim - Interactive DDoS Attack Simulation & Visualization",
    template: "%s | DDoSim",
  },
  description:
    "Experience real-time DDoS attack simulations with interactive global mapping, analytics, and educational insights. Visualize distributed denial-of-service attacks from multiple locations worldwide.",
  keywords: [
    "DDoS simulation",
    "DDoS attacks",
    "cybersecurity",
    "network security",
    "attack visualization",
    "security education",
    "DDoS training",
  ],
  openGraph: {
    type: "website",
    siteName: "DDoSim",
    url: baseUrl,
    title: "DDoSim - Interactive DDoS Attack Simulation & Visualization",
    description:
      "Interactive DDoS attack simulations with real-time global visualization and educational insights.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DDoSim - DDoS attack simulation and visualization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DDoSim - Interactive DDoS Attack Simulation & Visualization",
    description:
      "Simulate and visualize DDoS attacks in real time for education, training, and research.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
