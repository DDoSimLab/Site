import { CaretDoubleRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import { Globe } from "../ui/globe2";
import { Highlighter } from "../ui/highlighter";

export function HeroSection() {
  return (
    <section className="hero-section content-center h-full">
      <div className="hero-container container mx-auto px-8 max-w-7xl">
        <div className="hero-grid grid md:grid-cols-2 gap-8 items-center py-16 md:py-0">
          {/* Left Column */}
          <div className="hero-left space-y-6 place-self-center z-20">
            {/* Main Heading */}
            <h1 className="hero-heading text-3xl md:text-4xl font-bold">
              Experience Real-Time{" "}
              <Highlighter action="highlight">DDoS</Highlighter> Attack
              <Highlighter action="underline" color="#FF9800">
                Simulations
              </Highlighter>
            </h1>

            {/* Subheading/Description */}
            <div className="hero-description space-y-2">
              <p className="hero-description-text text-gray-700">
                DDoSim is an interactive platform for simulating and visualizing
                Distributed Denial-of-Service (DDoS) attacks in real time across
                the globe.
              </p>
            </div>

            {/* Primary Button */}
            <Button variant="outline">
              Simulator
              <CaretDoubleRightIcon weight="duotone" size={20} />
            </Button>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="hero-right hero-image-placeholder aspect-square relative z-2">
            <Globe className="place-self-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
