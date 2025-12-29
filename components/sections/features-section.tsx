import {
  CpuIcon,
  LightningIcon,
  LockIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { TEXT_CONTENT, NAVIGATION, IMAGE_DIMENSIONS } from "@/lib/constants";

export function FeaturesSection() {
  return (
    <section
      id={NAVIGATION.SECTIONS.FEATURES.replace("#", "")}
      className="features-section mb-10 z-3 relative scroll-mt-36"
    >
      <div className="features-container container mx-auto max-w-7xl px-8 relative">
        <div className="mx-auto space-y-8 md:space-y-12">
          <div className="relative z-0 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              {TEXT_CONTENT.FEATURES.TITLE}
            </h2>
            <p className="mt-6 text-gray-700">
              {TEXT_CONTENT.FEATURES.DESCRIPTION}
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row items-center">
            <div className="order-2 mask-b-from-75% mask-l-from-75% mask-b-to-95% mask-l-to-95% relative md:-mx-2">
              <div className="perspective-midrange">
                <div className="rotate-x-6 -skew-2">
                  <div className="aspect-auto relative">
                    <Image
                      src="/ddosim-light.png"
                      className="absolute inset-0 z-0"
                      alt="payments illustration dark"
                      width={IMAGE_DIMENSIONS.FEATURES_ILLUSTRATION.WIDTH}
                      height={IMAGE_DIMENSIONS.FEATURES_ILLUSTRATION.HEIGHT}
                    />
                    <Image
                      src="/ddosim-dark.png"
                      className="hidden dark:block"
                      alt="payments illustration dark"
                      width={IMAGE_DIMENSIONS.FEATURES_ILLUSTRATION.WIDTH}
                      height={IMAGE_DIMENSIONS.FEATURES_ILLUSTRATION.HEIGHT}
                    />
                    <Image
                      src="/ddosim-light.png"
                      className="dark:hidden"
                      alt="payments illustration light"
                      width={IMAGE_DIMENSIONS.FEATURES_ILLUSTRATION.WIDTH}
                      height={IMAGE_DIMENSIONS.FEATURES_ILLUSTRATION.HEIGHT}
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
                    {TEXT_CONTENT.FEATURES.ITEMS[0].TITLE}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {TEXT_CONTENT.FEATURES.ITEMS[0].DESCRIPTION}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CpuIcon className="size-4" />
                  <h3 className="text-sm font-medium">
                    {TEXT_CONTENT.FEATURES.ITEMS[1].TITLE}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {TEXT_CONTENT.FEATURES.ITEMS[1].DESCRIPTION}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LockIcon className="size-4" />
                  <h3 className="text-sm font-medium">
                    {TEXT_CONTENT.FEATURES.ITEMS[2].TITLE}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {TEXT_CONTENT.FEATURES.ITEMS[2].DESCRIPTION}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <SparkleIcon className="size-4" />
                  <h3 className="text-sm font-medium">
                    {TEXT_CONTENT.FEATURES.ITEMS[3].TITLE}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {TEXT_CONTENT.FEATURES.ITEMS[3].DESCRIPTION}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
