"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedText = () => {
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
  );
};

export default AnimatedText;
