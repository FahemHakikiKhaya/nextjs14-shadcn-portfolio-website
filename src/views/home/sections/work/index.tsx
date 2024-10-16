"use client";

import { Badge } from "@/components/ui/badge";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const projects: {
  image: string;
  title: string;
  description: string;
  stacks: string[];
  link: string;
}[] = [
  {
    image: "purwadhika.png",
    title: "Purwadhika",
    stacks: ["React js", "Express js", "Typescript"],
    description:
      "Developed and maintained public dashboards, a landing page, a content management system, and backend APIs, while leading scrum routines and mentoring junior developers.",
    link: "https://purwadhika.com/",
  },
  {
    image: "kirei.png",
    title: "Kirei",
    description:
      "Developed and maintained a public landing page, a content management system, a driver and worker workbook app, and a backend API",
    stacks: ["Next js", "Nest js", "Prisma", "AWS S3"],
    link: "https://www.kireiwash.com/",
  },
  {
    image: "atur-dompetku-new.png",
    title: "Money Management App",
    description:
      "A comprehensive personal money management app that allows you to track and manage spending across multiple wallets simultaneously.",
    stacks: ["React Native", "Nest js", "Prisma"],
    link: "https://github.com/FahemHakikiKhaya/AturDompetku-Expo-ReactNative",
  },
  {
    image: "detective-new.png",
    title: "Smartphone Diagnostic App",
    description:
      "A forward-chaining smartphone diagnostic app that uses a series of guided questions to identify smartphone issues ",
    stacks: ["Next js", "Nest js", "Prisma", "Supabase"],
    link: "https://fahem-khakiki-khaya-detective.vercel.app/",
  },
  {
    image: "perfect-chat-app.png",
    title: "Chat App",
    description:
      "A comprehensive real-time chat app that allows you to seamlessly communicate in personal or group chats with responsive design and secure authentication.",
    stacks: ["Nextjs", "Pusher", "Prisma", "OAuth2"],
    link: "https://fahem-khakiki-khaya-chat-app.vercel.app/",
  },
];

const WorkSection = () => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center lg:my-20 my-16 container"
      id="project-section"
    >
      <div className="flex flex-col items-center text-center mb-10">
        <div className="text-sm mb-4">WORKS</div>
        <div className="lg:text-4xl text-2xl font-extrabold max-w-[600px]">
          Turning visions into reality.{" "}
        </div>
      </div>
      <div className="w-full">
        <BentoGrid className="max-w-6xl min-w-max-w-6xl">
          {projects.map((item, i) => (
            <BentoGridItem
              onClick={() =>
                window.open(item.link, "_blank", "noopener,noreferrer")
              }
              key={i}
              title={item.title}
              description={item.description}
              header={
                <div className="lg:w-full lg:h-full h-[300px] relative group-hover:opacity-100 opacity-80 transition duration-200">
                  <Image
                    src={`/static/project/${item.image}`}
                    alt="profile-picture"
                    layout="fill"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              }
              icon={
                <div className="flex flex-row flex-wrap gap-3 my-4">
                  {item.stacks.map((stack, index) => (
                    <Badge
                      variant="secondary"
                      key={index}
                      className="font-medium py-1"
                    >
                      {stack}
                    </Badge>
                  ))}
                </div>
              }
              className={`group ${i === 3 || i === 6 ? "lg:col-span-2" : ""}`}
            />
          ))}
        </BentoGrid>
      </div>
      <Link
        href="https://github.com/FahemHakikiKhaya?tab=repositories"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button variant="primaryOutlined" size="lg" className="mt-7">
          View More
        </Button>
      </Link>
    </div>
  );
};

export default WorkSection;
