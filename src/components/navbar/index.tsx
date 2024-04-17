"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, PersonStanding } from "lucide-react";
import { useTheme } from "next-themes";

export default function NavigationBar() {
  const { theme, setTheme } = useTheme();
  const [scrollView, setScrollView] = useState({ position: 0, visible: true });

  useEffect(() => {
    const handleScroll = () => {
      const isVisible = scrollView.position > window.scrollY;

      setScrollView({ position: window.scrollY, visible: isVisible });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollView.position]);

  return (
    <div
      className={`py-8 fixed w-screen top-0 ${
        scrollView.visible
          ? "translate-y-0 opacity-100 transition duration-700 ease-in"
          : "-translate-y-full opacity-0 transition duration-700 ease-out"
      }`}
    >
      <div className="container flex flex-row justify-between">
        <div className="flex flex-row space-x-16 items-center">
          <div className="flex flex-row items-center bg-primary-foreground">
            <PersonStanding size={30} />
            <h3 className="text-primary font-extrabold w-fit text-3xl">
              FAHEM
            </h3>
          </div>

          <ul className="flex flex-row space-x-9 text-primary-foreground">
            <li>Home</li>
            <li>Project</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Moon />
        </Button>
      </div>
    </div>
  );
}
