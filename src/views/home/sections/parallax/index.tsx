"use client";

import Ribbon from "@/components/ribbon";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Parallax = () => {
  const container = useRef(null);

  const points: string[] = [
    "FRONTEND",
    "BACKEND",
    "DATABASE DESIGN",
    "DEVOPS",
    "MOBILE DEVELOPMENT",
  ];

  return (
    <div>
      <div className="h-screen bg-primary-foreground">
        <Ribbon labels={["What can i do"]} />
        <div className="container">
          {React.Children.toArray(
            points.map((point) => (
              <motion.div
                initial={{ y: 200 }}
                whileInView="onscreen"
                viewport={{ amount: 0.8 }}
                className="my-7"
              >
                <motion.div
                  variants={{
                    onscreen: {
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                        restDelta: 0.001,
                      },
                    },
                  }}
                  className="text-8xl text-primary font-extrabold"
                >
                  {point}
                </motion.div>
              </motion.div>
            ))
          )}
        </div>
      </div>
      <div style={{ position: "sticky", top: 0, marginTop: "0", zIndex: 1 }}>
        <Ribbon
          labels={["What have i made"]}
          bgColor="bg-primary"
          textColor="text-primary-foreground"
        />
        {/* <div className="bg-primary p-5">
          <div className="container text-6xl font-extrabold">
            What have i made
          </div>
        </div> */}
      </div>
      <div className="h-auto bg-primary relative">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-10 container">
          {React.Children.toArray(
            [1, 2, 3].map(() => (
              <div>
                <div className="flex justify-between flex-row mb-2">
                  <div>FEATURED</div>
                  <div>00:01</div>
                </div>
                <div className="w-full h-[400px] relative">
                  <Image
                    src="/static/profile-picture.jpg"
                    alt="profile-picture"
                    width={300}
                    height={300}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div
        className="h-screen bg-slate-800"
        style={{ position: "sticky", top: 0 }}
      />
      {/* </div> */}
    </div>
  );
};

export default Parallax;
