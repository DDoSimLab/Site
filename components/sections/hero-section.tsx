import { CaretDoubleRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  SIMULATOR_URLS,
  TEXT_CONTENT,
  COLORS,
  ICON_SIZES,
} from "@/lib/constants";
import { Globe } from "../ui/globe";
import { Highlighter } from "../ui/highlighter";

export function HeroSection() {
  return (
    <section
      className="hero-section content-center h-full"
      aria-labelledby="hero-heading"
    >
      <div className="hero-container container mx-auto px-8 max-w-7xl">
        <div className="hero-grid grid lg:grid-cols-2 gap-8 items-center py-16 md:py-0">
          {/* Left Column */}
          <div className="hero-left space-y-6 place-self-center z-20">
            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="hero-heading text-3xl md:text-4xl font-bold"
            >
              {TEXT_CONTENT.HERO.HEADING.PART1}{" "}
              <Highlighter action="highlight">
                {TEXT_CONTENT.HERO.HEADING.PART2}
              </Highlighter>{" "}
              {TEXT_CONTENT.HERO.HEADING.PART3}{" "}
              <Highlighter action="underline" color={COLORS.HIGHLIGHT_ORANGE}>
                {TEXT_CONTENT.HERO.HEADING.PART4}
              </Highlighter>
            </h1>

            {/* Subheading/Description */}
            <div className="hero-description space-y-2">
              <p className="hero-description-text text-gray-700">
                {TEXT_CONTENT.HERO.DESCRIPTION}
              </p>
            </div>

            {/* Primary Button */}
            <Link
              href={SIMULATOR_URLS.PRIMARY}
              aria-label={TEXT_CONTENT.HERO.ARIA_LABEL}
            >
              <Button variant="outline">
                {TEXT_CONTENT.BUTTONS.SIMULATOR}
                <CaretDoubleRightIcon
                  weight="duotone"
                  size={ICON_SIZES.MEDIUM}
                />
              </Button>
            </Link>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="hero-right aspect-square relative z-2">
            <Globe className="place-self-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
