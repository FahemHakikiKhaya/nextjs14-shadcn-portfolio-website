"use client";

import { useCallback, useEffect, useState } from "react";
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
import { X } from "lucide-react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function NavigationBar() {
  const { theme, setTheme } = useTheme();
  const lenis = useLenis();

  const { isMd } = useBreakpoint("md");

  const scrollToSection = useCallback(
    (id: string) => {
      if (lenis && "scrollTo" in lenis) {
        lenis.scrollTo(`#${id}`, {
          offset: -50, // Example offset (scroll-padding-top)
          duration: 1, // Example duration in seconds
          easing: (t) => t * (2 - t), // Example easing function
          onComplete: () => console.log("Scroll complete!"), // Callback when done
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
          <div className="font-extrabold text-xl mr-5">Fahem</div>
          {Boolean(isMd) && (
            <>
              <div
                onClick={() => scrollToSection("about-section")}
                className="cursor-pointer"
              >
                About
              </div>
              <div
                onClick={() => scrollToSection("project-section")}
                className="cursor-pointer"
              >
                Project
              </div>
              <div
                onClick={() => scrollToSection("contact-section")}
                className="cursor-pointer"
              >
                Contact Me
              </div>
            </>
          )}
        </div>
        <div className="flex flex-row items-center gap-x-10">
          {Boolean(!isMd) && (
            <Drawer direction="right">
              <DrawerTrigger>MENU</DrawerTrigger>
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
          <Switch
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          />
        </div>
      </div>
    </motion.div>
  );
}
