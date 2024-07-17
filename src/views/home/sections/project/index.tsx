import Image from "next/image";
import React from "react";

function ProjectCard({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-secondary rounded-2xl">
      <div className="bg-slate-300 rounded-t-2xl">
        <div className="relative w-full h-80">
          <Image
            src={`/static/project/${image}`}
            width={400}
            height={400}
            className="absolute inset-0 w-full h-full object-cover"
            alt="project-image"
          />
        </div>
      </div>
      <div className="space-y-3 p-8">
        <div className="text-xl font-bold">{name}</div>
        <div className="font-light text-sm">{description}</div>
      </div>
    </div>
  );
}
const projectList = [
  {
    name: "Smartphone Diagnostic App",
    description:
      "A web-based diagnostic app that guides you through a series of questions to pinpoint issues with your smartphone.",
    image: "detective.png",
  },
  {
    name: "Money Management App",
    description:
      "A mobile app designed to help you track your daily expenses effortlessly.",
    image: "aturDompetku.png",
  },
];

export default function ProjectSection() {
  return (
    <div className="container py-28">
      <div className="flex md:flex-row flex-col md:justify-between md:items-end space-y-4">
        <div className="md:text-5xl text-4xl leading-tight font-bold">
          Look at My{" "}
          <span className="bg-clip-text text-transparent primary-gradient">
            <br />
            Projects.
          </span>
        </div>
        <div className="text-sm max-w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          pharetra velit ut tortor blandit, in mattis arcu vehicula. Morbi et
          leo venenatis, maximus eros sed, dictum diam. Nunc luctus, tortor eget{" "}
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-10 mt-16">
        {React.Children.toArray(
          projectList.map((project) => {
            return <ProjectCard {...project} />;
          })
        )}
      </div>
    </div>
  );
}
