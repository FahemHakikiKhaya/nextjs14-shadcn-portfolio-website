import React from "react";
import HeroSection from "./sections/hero";
import AboutSection from "./sections/about";
import ImageMarquee from "@/components/marquee";
import ProficiencySection from "./sections/proficiency";
import WorkSection from "./sections/work";
import ContactSection from "./sections/contact";

const firstWeapons = [
  { width: { md: "118px", xs: "80px" }, src: "docker.png" },
  { width: { md: "205px", xs: "142px" }, src: "nestjs.png" },
  { width: { md: "118px", xs: "80px" }, src: "next.png" },
  { width: { md: "205.05px", xs: "142px" }, src: "react.png" },
  { width: { md: "100px", xs: "70px" }, src: "typescript.png" },
  { width: { md: "118px", xs: "80px" }, src: "github.png" },
];

export default function HomeView() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <div className="md:my-28 my-16">
        <ImageMarquee images={firstWeapons} />
      </div>
      <ProficiencySection />
      <WorkSection />
      <div className="mb-20">
        <ImageMarquee images={firstWeapons} />
      </div>
      <ContactSection />
    </div>
  );
}
