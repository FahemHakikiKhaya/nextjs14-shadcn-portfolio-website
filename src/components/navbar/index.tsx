"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, PersonStanding } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

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
    <motion.div
      className="py-8 fixed w-screen z-10 opacity-70 bg-primary backdrop-blur-md"
      initial={{ translateY: 0 }}
      animate={{ translateY: scrollView.visible ? 0 : -100 }}
      transition={{ type: "just", stiffness: 300 }}
    >
      <div className="container flex flex-row justify-between">
        <div className="flex flex-row space-x-16 items-center">
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
    </motion.div>
  );
}
