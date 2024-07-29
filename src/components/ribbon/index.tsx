"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { Sparkle } from "lucide-react";

const defaultLabels: string[] = ["Code", "Deploy", "Review", "Improve"];

export default function Ribbon({
  labels = defaultLabels,
  bgColor = "bg-primary-foreground",
  textColor = "text-primary",
}: {
  labels?: string[];
  bgColor?: string;
  textColor?: string;
}) {
  return (
    <div className={`${bgColor}`}>
      <Marquee gradient={false} direction="left" speed={50}>
        {React.Children.toArray(
          Array.from({ length: 10 }, () => {
            return (
              <div className="flex py-5 items-center">
                {React.Children.toArray(
                  labels.map((motto) => (
                    <>
                      <div className={`${textColor} text-2xl font-bold`}>
                        {motto}
                      </div>
                      <Sparkle className={`${textColor} mx-5`} />
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
