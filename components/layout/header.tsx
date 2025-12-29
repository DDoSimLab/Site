"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { CaretDoubleRightIcon } from "@phosphor-icons/react";
import { handleSmoothScroll } from "@/lib/scroll-utils";
import Link from "next/link";
import { SIMULATOR_URLS } from "@/lib/constants";

export function Header() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "About Us",
      link: "#about",
    },
    {
      name: "Blogs",
      link: "/blog",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <Link
            href={SIMULATOR_URLS.PRIMARY}
            className="flex items-center"
            aria-label="Open the DDoSim interactive simulator"
          >
            <NavbarButton variant="primary" className="flex gap-2 items-center">
              <span>Simulator</span>
              <CaretDoubleRightIcon weight="duotone" size={20} />
            </NavbarButton>
          </Link>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  handleSmoothScroll(e, item.link);
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <Link
              href={SIMULATOR_URLS.PRIMARY}
              aria-label="Open the DDoSim interactive simulator"
            >
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="flex gap-2 items-center"
              >
                <span>Simulator</span>
                <CaretDoubleRightIcon weight="duotone" size={20} />
              </NavbarButton>
            </Link>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
