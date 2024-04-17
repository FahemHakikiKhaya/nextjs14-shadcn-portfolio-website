"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { Sparkle } from "lucide-react";

const mottos: string[] = ["Code", "Deploy", "Review", "Improve"];

export default function Ribbon() {
  return (
    <div className="bg-primary-foreground">
      <Marquee gradient={false} direction="left" speed={50}>
        {React.Children.toArray(
          Array.from({ length: 10 }, () => {
            return (
              <div className="flex py-5 items-center">
                {React.Children.toArray(
                  mottos.map((motto) => (
                    <>
                      <div className="text-primary text-2xl font-bold">
                        {motto}
                      </div>
                      <Sparkle className="text-primary mx-5" />
                    </>
                  ))
                )}
              </div>
            );
          })
        )}
      </Marquee>
    </div>
  );
}
