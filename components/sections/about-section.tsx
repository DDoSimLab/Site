import { TargetIcon, EyeIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { TEXT_CONTENT, NAVIGATION } from "@/lib/constants";

export function AboutSection() {
  return (
    <section
      id={NAVIGATION.SECTIONS.ABOUT.replace("#", "")}
      className="about-section py-16 scroll-mt-24"
    >
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                {TEXT_CONTENT.ABOUT.TITLE}
              </h2>
              <p className="text-muted-foreground text-lg">
                {TEXT_CONTENT.ABOUT.DESCRIPTION}
              </p>
            </div>

            <div className="space-y-6 pt-4 grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                  <TargetIcon
                    className="size-6 text-primary"
                    weight="duotone"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {TEXT_CONTENT.ABOUT.MISSION.TITLE}
                  </h3>
                  <p className="text-muted-foreground">
                    {TEXT_CONTENT.ABOUT.MISSION.DESCRIPTION}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                  <EyeIcon className="size-6 text-primary" weight="duotone" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {TEXT_CONTENT.ABOUT.VISION.TITLE}
                  </h3>
                  <p className="text-muted-foreground">
                    {TEXT_CONTENT.ABOUT.VISION.DESCRIPTION}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          {/* <div className="order-1 md:order-2 hero-image-placeholder aspect-square relative z-2 flex items-center justify-center">
            <div className="relative w-1/4 h-full">
              <Image
                src="/globe.svg"
                alt="DDoSim Platform"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
