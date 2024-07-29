"use client";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import useParallax from "@/hooks/useParallax";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";

const SkillsDropdown: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full">
        <div className="p-5 flex flex-row justify-between items-center skills-background">
          <div className="text-5xl">{title}</div>
          <ArrowUpRight size={90} strokeWidth={1} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="CollapsibleContent">
        <div>{content}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const skills: { title: string; content: string }[] = [
  { title: "Full Stack Web Development", content: "Test" },
  { title: "Version Control", content: "Test" },
  { title: "Dev Ops", content: "test" },
  { title: "Unit Testing", content: "test" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div className="my-20" ref={ref}>
        <div className="container">
          <div className="md:text-5xl text-4xl font-bold w-3/5 leading-snug">
            Crafting solutions through
            <span>
              <br />
              ____code, from
            </span>
            <span className="bg-clip-text text-transparent primary-gradient">
              <br />
              end to end.
            </span>
          </div>
          <div className="mt-6">
            {React.Children.toArray(
              skills.map(({ title }) => (
                <div className="border-y-2 p-5 flex flex-row justify-between items-center skills-background cursor-pointer">
                  <div className="md:text-5xl text-3xl">{title}</div>
                  <ArrowUpRight size={90} strokeWidth={1} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
