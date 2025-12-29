import { TargetIcon, EyeIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="about-section py-16 scroll-mt-24">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">About DDoSim</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                We're on a mission to make cybersecurity education accessible,
                interactive, and engaging for everyone.
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
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    To provide a powerful, educational platform that helps
                    security professionals, students, and organizations
                    understand DDoS attacks through interactive visualization
                    and real-time simulation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                  <EyeIcon className="size-6 text-primary" weight="duotone" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    To become the leading platform for cybersecurity education,
                    empowering the next generation of security professionals
                    with hands-on experience in a safe, controlled environment.
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
