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
import { SIMULATOR_URLS, NAVIGATION, TEXT_CONTENT, ICON_SIZES } from "@/lib/constants";

export function Header() {
  const navItems = NAVIGATION.ITEMS;

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
            aria-label={TEXT_CONTENT.HERO.ARIA_LABEL}
          >
            <NavbarButton variant="primary" className="flex gap-2 items-center">
              <span>{TEXT_CONTENT.BUTTONS.SIMULATOR}</span>
              <CaretDoubleRightIcon weight="duotone" size={ICON_SIZES.MEDIUM} />
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
              aria-label={TEXT_CONTENT.HERO.ARIA_LABEL}
            >
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="flex gap-2 items-center"
              >
                <span>{TEXT_CONTENT.BUTTONS.SIMULATOR}</span>
                <CaretDoubleRightIcon weight="duotone" size={ICON_SIZES.MEDIUM} />
              </NavbarButton>
            </Link>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
