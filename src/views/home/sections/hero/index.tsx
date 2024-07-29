"use client";

import Ribbon from "@/components/ribbon";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [translateY, setTranslateY] = useState<number>(0);

  const { isMd } = useBreakpoint("md");

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateY((prevTranslateY) => {
        if (prevTranslateY === (isMd ? 96 : 48) * 3) {
          return 0;
        }
        return prevTranslateY + (isMd ? 96 : 48);
      });
    }, 2000);

    // Cleanup the interval on component unmount
    return () => {
      setTranslateY(0);
      clearInterval(interval);
    };
  }, [isMd]);

  return (
    <div className="md:h-screen h-[80vh] md:flex-row flex flex-col-reverse justify-between md:gap-0 gap-5">
      <div className="md:w-6/12 w-full flex md:flex-col flex-col justify-center items-center">
        <div className="md:text-8xl text-4xl font-bold leading-snug max-w-[550px] text-center">
          <p className="bg-clip-text text-transparent primary-gradient">
            LIVING TO
          </p>
          <div className="relative top-0 w-full overflow-hidden my-0 md:h-[96px] h-[48px]">
            <motion.div
              initial={{ translateY: 0 }}
              animate={{ translateY: translateY ? `-${translateY}px` : 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
                restDelta: 0.001,
              }}
              className="absolute top-0 left-0 right-0"
            >
              <p>DREAM</p>
              <p>CREATE</p>
              <p>AMAZE</p>
              <p>EXPLORE</p>
            </motion.div>
          </div>
        </div>
        <div className="font-bold text-md mt-5">
          FULLSTACK DEVELOPER IN INDONESIA
        </div>
      </div>
      <div className="md:w-6/12 w-full h-screen relative">
        <Image
          src="/static/profile-picture.jpg"
          alt="profile-picture"
          layout="fill"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
