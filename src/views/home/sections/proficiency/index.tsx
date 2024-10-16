import InViewAnimation from "@/components/in-view-animation";
import Image from "next/image";
import React from "react";

const proficiencies: string[] = [
  "Fullstack Development",
  "System Design",
  "DevOps",
  "Unit Testing",
  "Mobile Development",
  "Microservice Architecture",
  "Product Management",
];

const ProficiencySection = () => {
  return (
    <div className="container h-screen flex lg:flex-row flex-col lg:gap-0 gap-10">
      <div className="lg:w-6/12 w-full lg:h-full h-screen relative">
        <Image
          src="/static/kibby.png"
          alt="profile-picture"
          layout="fill"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-6/12 w-full flex flex-col items-center justify-center">
        <div className="text-sm mb-4">PROFICIENCIES</div>
        <div className="lg:space-y-1 text-center">
          {React.Children.toArray(
            proficiencies.map((point) => (
              <InViewAnimation>
                <div className="lg:text-4xl text-2xl font-extrabold">
                  {point}
                </div>
              </InViewAnimation>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProficiencySection;
