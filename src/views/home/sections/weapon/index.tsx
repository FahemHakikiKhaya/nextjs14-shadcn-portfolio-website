import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const weapons: { image: string; name: string }[] = [
  { image: "html.webp", name: "HTML" },
  { image: "css.png", name: "CSS" },
  { image: "javascript.png", name: "Javascript" },
  { image: "typescript.png", name: "Typescript" },
  { image: "react.png", name: "React" },
  { image: "express.png", name: "Express JS" },
  { image: "mysql.png", name: "MySql" },
  { image: "nextjs.png", name: "Next JS" },
];

export default function WeaponSection() {
  return (
    <div className="container">
      <div className="text-5xl leading-tight font-bold">
        My main
        <span className="bg-clip-text text-transparent primary-gradient">
          {" "}
          Weapons.
        </span>
      </div>
      <Carousel className="mt-8">
        <CarouselContent>
          {React.Children.toArray(
            weapons.map(({ image, name }) => (
              <CarouselItem className="basis-1/6">
                <div className="bg-secondary p-6">
                  <div className="relative w-3/4 h-28 mx-auto">
                    <Image
                      src={`/static/weapons/${image}`}
                      width={400}
                      height={400}
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-xl text-center font-semibold mt-5">
                    {name}
                  </div>
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
