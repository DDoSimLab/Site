"use client";

import Link from "next/link";
import { handleSmoothScroll } from "@/lib/scroll-utils";
import {
  NAVIGATION,
  TEXT_CONTENT,
  SITE_METADATA,
  SITE_URLS,
} from "@/lib/constants";
import { GithubButton } from "../ui/github-button";

const links = NAVIGATION.ITEMS.map((item) => ({
  title: item.name,
  href: item.link,
}));

export function Footer({ stars }: { stars: number }) {
  return (
    <footer className="footer border-t border-gray-300 py-8 mt-16">
      <div className="footer-container container mx-auto px-8 max-w-7xl">
        <div className="flex flex-wrap md:justify-between justify-center gap-6 items-center">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            {TEXT_CONTENT.FOOTER.COPYRIGHT(new Date().getFullYear())}
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last items-center">
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
            <GithubButton
              variant={"outline"}
              separator={true}
              roundStars={true}
              targetStars={stars}
              repoUrl={SITE_URLS.GITHUB_REPO}
              className="place-self-end"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
