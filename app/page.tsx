import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { BlogsSection } from "@/components/sections/blogs-section";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";

export default function Page() {
  return (
    <main className="landing-page pt-10 flex flex-col flex-1 justify-evenly">
      {/* <GravityStarsBackground
        className="absolute inset-0 z-1 flex h-svh items-center justify-center rounded-xl"
        starsCount={250}
      /> */}
      <div className="relative h-screen 3xl:h-auto">
        <HexagonBackground className="absolute inset-0 z-1" />
        <HeroSection />
      </div>
      <FeaturesSection />
      <BlogsSection />
    </main>
  );
}
