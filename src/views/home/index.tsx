"use client";

import Ribbon from "@/components/ribbon";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { FC, PropsWithChildren, useEffect, useRef } from "react";
import HeroSection from "./sections/hero";
import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import { Separator } from "@/components/ui/seperator";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const points: string[] = [
  "Frontend",
  "Backend",
  "Database Design",
  "DevOps and Deployment",
  "Unit Testing",
  "Mobile Development",
];

const projects: { image: string; title: string; description: string }[] = [
  {
    image: "purwadhika.png",
    title: "Purwadhika",
    description: "A bootcamp website",
  },
  {
    image: "kirei.png",
    title: "Kirei",
    description: "A laundry express platform",
  },
  {
    image: "atur-dompetku.png",
    title: "Atur Dompetku",
    description: "A money management",
  },
  {
    image: "detective.png",
    title: "Detective",
    description: "A smartphone diagnostic app",
  },
  {
    image: "detective.png",
    title: "Detective",
    description: "A smartphone diagnostic app",
  },
];

const firstWeapons = [
  { width: { md: "118px", xs: "80px" }, src: "docker.png" },
  { width: { md: "205px", xs: "142px" }, src: "nestjs.png" },
  { width: { md: "118px", xs: "80px" }, src: "next.png" },
  { width: { md: "205.05px", xs: "142px" }, src: "react.png" },
  { width: { md: "100px", xs: "70px" }, src: "typescript.png" },
  { width: { md: "118px", xs: "80px" }, src: "github.png" },
];

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

export default function HomeView() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [1, 0], [-1000, 600]);

  const { isMd } = useBreakpoint("md");

  return (
    <div>
      <HeroSection />

      <div className="container md:mt-28 mt-16 flex flex-col items-center">
        <InViewAnimation>
          <div className="text-sm mb-4">ABOUT ME</div>
        </InViewAnimation>
        <div className="text-center max-w-[750px]">
          <InViewAnimation>
            <div className="md:text-4xl text-2xl text-center font-extrabold mt-1">
              Hello, I'm Fahem, an experienced{" "}
              <span className="bg-clip-text text-transparent primary-gradient">
                fullstack developer
              </span>{" "}
              fueled by an insatiable curiosity <br />
              <br />
            </div>
          </InViewAnimation>
          <InViewAnimation>
            <div className="md:text-4xl text-2xl text-center font-extrabold mt-1">
              Uncovering the secrets behind how technology transforms everyday
              experiences into something truly magical
            </div>
          </InViewAnimation>
        </div>
        <InViewAnimation>
          <div className="mt-4">Based in Jakarta</div>
          <Button variant="primaryOutlined" size="lg" className="mt-7">
            Read More
          </Button>
        </InViewAnimation>
      </div>

      <div className="bg-primary md:my-28 my-16">
        <Marquee gradient={false} direction="left" speed={50}>
          <div className="flex flex-row">
            {React.Children.toArray(
              firstWeapons.concat(firstWeapons).map(({ src, width }) => {
                return (
                  <div
                    className={`md:h-[100px] h-[70px] relative md:mx-10 mx-8`}
                    style={{ width: isMd ? width.md : width.xs }}
                  >
                    <Image
                      src={`/static/library/${src}`}
                      alt="profile-picture"
                      width={300}
                      height={300}
                      className="absolute inset-0 w-auto h-full object-cover"
                    />
                  </div>
                );
              })
            )}
          </div>
        </Marquee>
      </div>
      <div className="container h-screen flex md:flex-row flex-col md:gap-0 gap-10">
        <div className="md:w-6/12 w-full md:h-full h-screen relative">
          <Image
            src="/static/kibby.png"
            alt="profile-picture"
            layout="fill"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="md:w-6/12 w-full flex flex-col items-center justify-center">
          <div className="text-sm mb-4">PROFICIENSIES</div>
          <div className="md:space-y-1 text-center">
            {React.Children.toArray(
              points.map((point) => (
                <InViewAnimation>
                  <div className="md:text-4xl text-2xl font-extrabold">
                    {point}
                  </div>
                </InViewAnimation>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:my-20 my-16 container">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="text-sm mb-4">WORKS</div>
          <div className="md:text-4xl text-2xl font-extrabold max-w-[600px]">
            Turning visions into reality.{" "}
          </div>
        </div>
        <div className="w-full">
          <BentoGrid className="max-w-4xl min-w-4xl">
            {projects.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={
                  <div className="md:w-full md:h-full h-[200px] relative group-hover:opacity-100 opacity-80 transition duration-200">
                    <Image
                      src={`/static/project/${item.image}`}
                      alt="profile-picture"
                      layout="fill"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                }
                className={`group ${i === 3 || i === 6 ? "md:col-span-2" : ""}`}
              />
            ))}
          </BentoGrid>
        </div>
        <Button variant="primaryOutlined" size="lg" className="mt-7">
          View More
        </Button>{" "}
      </div>
      <div className="bg-primary mb-20">
        <Marquee gradient={false} direction="left" speed={50}>
          <div className="flex flex-row">
            {React.Children.toArray(
              [
                { width: "118px", src: "docker.png" },
                { width: "205px", src: "nestjs.png" },
                { width: "118px", src: "next.png" },
                { width: "205.05px", src: "react.png" },
                { width: "100px", src: "typescript.png" },
                { width: "118px", src: "github.png" },
                { width: "118px", src: "docker.png" },
                { width: "205px", src: "nestjs.png" },
                { width: "118px", src: "next.png" },
                { width: "205.05px", src: "react.png" },
                { width: "100px", src: "typescript.png" },
                { width: "118px", src: "github.png" },
              ].map(({ src, width }) => {
                return (
                  <div className={`h-[100px] relative mx-10`} style={{ width }}>
                    <Image
                      src={`/static/library/${src}`}
                      alt="profile-picture"
                      width={300}
                      height={300}
                      className="absolute inset-0 w-auto h-full object-cover"
                    />
                  </div>
                );
              })
            )}
          </div>
        </Marquee>
      </div>
      <div className="container h-screen flex md:flex-row flex-col md:mb-20 mb-16 md:gap-0 gap-14">
        <div className="md:w-6/12 w-full h-screen relative">
          <Image
            src="/static/teamwork2.png"
            alt="profile-picture"
            layout="fill"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="md:w-6/12 w-full flex flex-col items-center justify-center">
          <InViewAnimation>
            <div className="md:text-7xl text-4xl font-bold mb-4 text-center">
              LET'S WORK TOGETHER
            </div>
          </InViewAnimation>
          <Button variant="primaryOutlined" size="lg" className="md:mt-7 mt-5">
            Contact Me
          </Button>{" "}
        </div>
      </div>
      <div className="container border border-solid border-gray-800 border-l my-20" />
      <div className="grid md:grid-cols-4 container gap-x-5 pb-20">
        <div className="uppercase">
          <div className="text-sm mb-4">Connect</div>
          <div className="text-3xl font-bold">Email</div>
          <div className="text-3xl font-bold">Instagram</div>
          <div className="text-3xl font-bold">Linkedin</div>
          <div className="text-3xl font-bold">Github</div>
          <div className="text-sm mt-auto pt-20">EN</div>
        </div>
        <div className="uppercase flex flex-col">
          <div className="text-sm mt-auto pt-20">
            © 2024 - INSPIRED BY RIVEN
          </div>
        </div>
      </div>
    </div>
  );
}
