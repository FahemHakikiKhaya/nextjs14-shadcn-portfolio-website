"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import Image from "next/image";
import React, { FC } from "react";
import Marquee from "react-fast-marquee";

const ImageMarquee: FC<{
  images: { src: string; width: { md: string; xs: string } }[];
}> = ({ images }) => {
  const { isMd } = useBreakpoint("md");

  return (
    <Marquee gradient={false} direction="left" speed={50}>
      <div className="flex flex-row">
        {React.Children.toArray(
          images.concat(images).map(({ src, width }) => {
            return (
              <div
                className={`md:h-[100px] h-[70px] relative md:mx-10 mx-8`}
                style={{ width: isMd ? width.md : width.xs }}
              >
                <Image
                  src={`/static/library/${src}`}
                  alt="profile-picture"
                  layout="fill"
                  className="absolute inset-0 w-auto h-full object-cover"
                />
              </div>
            );
          })
        )}
      </div>
    </Marquee>
  );
};

export default ImageMarquee;
