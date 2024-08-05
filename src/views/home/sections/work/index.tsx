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
    stacks: ["Strapi", "Midtrans", "Material UI"],
    description:
      "One of the highest contributor on purwadhika bootcamp website from revamping main website, cms, api and many more",
    link: "https://purwadhika.com/",
  },
  {
    image: "kirei.png",
    title: "Kirei",
    description:
      "Contribute as a part-time worker on building brand new laundry super app mainly on the workbook pwa",
    stacks: ["Geolocation", "Docker", "Object Storage"],
    link: "https://www.kireiwash.com/",
  },
  {
    image: "atur-dompetku.png",
    title: "Atur Dompetku",
    description:
      "A comprehensive personal money management app that allows you to track and manage spending across multiple wallets simultaneously.",
    stacks: ["React Native", "React Query", "Kitten UI"],
    link: "https://github.com/FahemHakikiKhaya/AturDompetku-Expo-ReactNative",
  },
  {
    image: "detective.png",
    title: "Detective",
    description:
      "A forward-chaining smartphone diagnostic app that uses a series of guided questions to identify smartphone issues",
    stacks: ["Next js", "Nest js", "Prisma", "Supabase"],
    link: "https://fahem-khakiki-khaya-detective.vercel.app/",
  },
];

const WorkSection = () => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center md:my-20 my-16 container"
      id="project-section"
    >
      <div className="flex flex-col items-center text-center mb-10">
        <div className="text-sm mb-4">WORKS</div>
        <div className="md:text-4xl text-2xl font-extrabold max-w-[600px]">
          Turning visions into reality.{" "}
        </div>
      </div>
      <div className="w-full">
        <BentoGrid className="max-w-6xl min-w-6xl">
          {projects.map((item, i) => (
            <BentoGridItem
              onClick={() =>
                window.open(item.link, "_blank", "noopener,noreferrer")
              }
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
              icon={
                <div className="flex flex-row flex-wrap gap-3 my-4">
                  {item.stacks.map((stack, index) => (
                    <Badge
                      variant="outline"
                      key={index}
                      className="font-medium py-1"
                    >
                      {stack}
                    </Badge>
                  ))}
                </div>
              }
              className={`group ${i === 3 || i === 6 ? "md:col-span-2" : ""}`}
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
