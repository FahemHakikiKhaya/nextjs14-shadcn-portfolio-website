"use client";

import Ribbon from "@/components/ribbon";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";
import HeroSection from "./sections/hero";
import SkillsSection from "./sections/skills";
import ProjectSection from "./sections/project";
import WeaponSection from "./sections/weapon";
import GitHubCalendar from "react-github-calendar";

export default function HomeView() {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <HeroSection />
      <div className="container mt-20">
        <div className="md:text-5xl text-4xl font-bold w-3/5 leading-snug mb-8">
          Recent
          <span className="bg-clip-text text-transparent primary-gradient">
            {" "}
            activities
          </span>
        </div>
        <GitHubCalendar
          username="fahemHakikiKhaya"
          colorScheme={theme === "dark" ? "dark" : "light"}
          theme={{
            light: ["#CBCAC8", "#999895", "#696866", "#3D3C3A", "#161513"],
            dark: ["#161513", "#3D3C3A", "#696866", "#999895", "#CBCAC8"],
          }}
        />
      </div>
      <SkillsSection />
      <WeaponSection />
      <ProjectSection />
    </div>
  );
}
