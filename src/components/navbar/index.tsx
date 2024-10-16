"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Switch } from "../ui/switch";
import { useLenis } from "lenis/react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import { Moon, Sun, X } from "lucide-react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Button } from "../ui/button";

const navItems = [
  {
    label: "About",
    id: "about-section",
  },
  {
    label: "Project",
    id: "project-section",
  },
  {
    label: "Contact",
    id: "contact-section",
  },
];

export default function NavigationBar() {
  const { theme, setTheme } = useTheme();
  const lenis = useLenis();

  const { isLg } = useBreakpoint("lg");
  const { isMd } = useBreakpoint("md");

  const scrollToSection = useCallback(
    (id: string) => {
      if (lenis && "scrollTo" in lenis) {
        lenis.scrollTo(`#${id}`, {
          offset: -50,
          duration: 1,
          easing: (t) => t * (2 - t),
          onComplete: () => console.log("Scroll complete!"),
        });
      } else {
        console.error(
          "Lenis instance is not available or does not have scrollTo method."
        );
      }
    },
    [lenis]
  );

  const [scrollView, setScrollView] = useState({ position: 0, visible: true });

  useEffect(() => {
    const handleScroll = () => {
      const isVisible = scrollView.position > window.scrollY;

      setScrollView({ position: window.scrollY, visible: isVisible });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollView.position]);

  const currentTheme = theme ?? "light";

  return (
    <motion.div
      className="py-5 fixed w-screen z-10"
      initial={{ translateY: 0 }}
      animate={{ translateY: scrollView.visible ? 0 : -100 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
      }}
    >
      <div className="container flex flex-row justify-between">
        <div className="flex flex-row space-x-5 items-center text-primary-foreground font-semibold uppercase text-sm">
          <div className="font-black text-xl mr-5">Fahem</div>
          {Boolean(isLg) &&
            React.Children.toArray(
              navItems.map(({ id, label }) => (
                <div
                  onClick={() => scrollToSection(id)}
                  className="cursor-pointer font-bold"
                >
                  {label}
                </div>
              ))
            )}
        </div>
        <div className="flex flex-row items-center gap-x-10">
          {Boolean(!isLg) && (
            <Drawer direction="right">
              <DrawerTrigger className="font-semibold">MENU</DrawerTrigger>
              <DrawerContent className="h-screen bg-primary">
                <DrawerHeader>
                  <DrawerClose>
                    {" "}
                    <X className="ml-auto" />
                  </DrawerClose>
                </DrawerHeader>
                <div className="h-full flex flex-col items-center justify-center space-y-2">
                  <DrawerClose
                    onClick={() =>
                      setTimeout(() => {
                        scrollToSection("about-section");
                      }, 600)
                    }
                  >
                    <div className="text-3xl uppercase space-y-3 font-bold">
                      About
                    </div>
                  </DrawerClose>
                  <DrawerClose
                    onClick={() =>
                      setTimeout(() => {
                        scrollToSection("project-section");
                      }, 600)
                    }
                    className="cursor-pointer"
                  >
                    <div className="text-3xl uppercase space-y-3 font-bold">
                      Project
                    </div>
                  </DrawerClose>
                  <DrawerClose
                    onClick={() =>
                      setTimeout(() => {
                        scrollToSection("contact-section");
                      }, 600)
                    }
                    className="cursor-pointer"
                  >
                    <div className="text-3xl uppercase space-y-3 font-bold">
                      Contact Me
                    </div>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          )}
          {Boolean(isLg) && (
            <Button
              variant="primaryOutlined"
              className="bg-primary rounded-full p-3 flex items-center justify-center"
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              style={{ width: "50px", height: "50px" }}
            >
              {currentTheme === "dark" ? (
                <Sun
                  className="text-primary-foreground"
                  style={{ width: "24px", height: "24px" }}
                />
              ) : (
                <Moon
                  className="text-primary-foreground"
                  style={{ width: "24px", height: "24px" }}
                />
              )}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
