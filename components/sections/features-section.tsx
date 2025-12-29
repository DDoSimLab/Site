import {
  CpuIcon,
  LightningIcon,
  LockIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="features-section mb-10 z-3 relative scroll-mt-36"
    >
      <div className="features-container container mx-auto max-w-7xl px-8 relative">
        <div className="mx-auto space-y-8 md:space-y-12">
          <div className="relative z-0 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
            <p className="mt-6 text-gray-700">
              DDoSim lets you quickly model, visualize, and understand DDoS
              attack and defense strategies with a beautiful, interactive globe.
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row items-center">
            <div className="order-2 mask-b-from-75% mask-l-from-75% mask-b-to-95% mask-l-to-95% relative md:-mx-2">
              <div className="perspective-midrange">
                <div className="rotate-x-6 -skew-2">
                  <div className="aspect-auto relative">
                    <Image
                      src="/mail-upper2.png"
                      className="absolute inset-0 z-0"
                      alt="payments illustration dark"
                      width={1000}
                      height={1137}
                    />
                    <Image
                      src="/mail-upper2.png"
                      className="hidden dark:block"
                      alt="payments illustration dark"
                      width={1000}
                      height={1137}
                    />
                    <Image
                      src="/mail-upper2.png"
                      className="dark:hidden"
                      alt="payments illustration light"
                      width={1000}
                      height={1137}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-2 lg:order-1 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-1">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <LightningIcon className="size-4" />
                  <h3 className="text-sm font-medium">
                    Instant DDoS Attack Simulation
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Model high-volume attack traffic and defense strategies in
                  seconds—no server setup required.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CpuIcon className="size-4" />
                  <h3 className="text-sm font-medium">
                    Interactive, Real-Time Visualization
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Watch attack and mitigation flows on a beautiful globe,
                  enabling deeper understanding at a glance.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LockIcon className="size-4" />
                  <h3 className="text-sm font-medium">Safe & Educational</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Safely simulate scenarios for training, workshops, and
                  CTFs—without risking real infrastructure.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <SparkleIcon className="size-4" />
                  <h3 className="text-sm font-medium">
                    Flexible, Extensible Workflows
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Script your own event scenarios or integrate with blue team
                  tools to customize simulations to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
