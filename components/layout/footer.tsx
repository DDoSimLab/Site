"use client";

import Link from "next/link";
import { handleSmoothScroll } from "@/lib/scroll-utils";

const links = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "About Us",
    href: "#about",
  },
  {
    title: "Blogs",
    href: "/blog",
  },
] as const;

export function Footer() {
  return (
    <footer className="footer border-t border-gray-300 py-8 mt-16">
      <div className="footer-container container mx-auto px-8">
        <div className="flex flex-wrap justify-between gap-6 px-8">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} DDoSimLab, All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-muted-foreground hover:text-primary block duration-150"
              >
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
