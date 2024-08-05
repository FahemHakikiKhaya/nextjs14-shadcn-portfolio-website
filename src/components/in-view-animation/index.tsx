"use client";

import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const InViewAnimation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8, once: true }}
    >
      <motion.div
        variants={{
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default InViewAnimation;
