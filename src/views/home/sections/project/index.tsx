import Image from "next/image";

function ProjectCard() {
  return (
    <div className="bg-secondary rounded-2xl">
      <div className="bg-slate-300 px-8 rounded-t-2xl">
        <div className="relative w-full h-80">
          <Image
            src="/static/project/example.png"
            width={400}
            height={400}
            className="absolute inset-0 w-full h-full object-cover"
            alt="project-image"
          />
        </div>
      </div>
      <div className="space-y-3 p-8">
        <div className="text-xl font-bold">Finance Landing Page</div>
        <div className="font-light text-sm">Landing Page UI Kit</div>
      </div>
    </div>
  );
}

export default function ProjectSection() {
  return (
    <div className="container py-28">
      <div className="flex flex-row justify-between items-end">
        <div className="text-5xl leading-tight font-bold">
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
      <div className="grid grid-cols-2 gap-24 mt-16">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
