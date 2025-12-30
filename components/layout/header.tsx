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
import {
  SIMULATOR_URLS,
  NAVIGATION,
  TEXT_CONTENT,
  ICON_SIZES,
} from "@/lib/constants";

export function Header({ stars }: { stars: number }) {
  const navItems = NAVIGATION.ITEMS;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} stars={stars} />
          <Link
            href={SIMULATOR_URLS.PRIMARY}
            className="flex items-center"
            aria-label={TEXT_CONTENT.HERO.ARIA_LABEL}
          >
            <NavbarButton
              as="button"
              variant="primary"
              className="flex gap-2 items-center"
            >
              <span>{TEXT_CONTENT.BUTTONS.SIMULATOR}</span>
              <CaretDoubleRightIcon weight="duotone" size={ICON_SIZES.MEDIUM} />
            </NavbarButton>
          </Link>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader stars={stars}>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            items={navItems}
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </MobileNav>
      </Navbar>
    </div>
  );
}
