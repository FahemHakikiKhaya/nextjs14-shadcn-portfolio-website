import Ribbon from "@/components/ribbon";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="md:h-screen h-auto pt-24 flex flex-col justify-between">
      <div className="container md:mt-16 mt-10">
        <div className="flex md:flex-row flex-col space-y-16 justify-between items-center">
          <div className="md:w-6/12 w-full flex flex-col space-y-7">
            <h1 className="md:text-6xl text-4xl font-extrabold leading-snug">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-floral via-fieryrose via-coral to-yelloworange">
                Hello, I&apos;m Fahem, <br />
              </span>
              full stack developer based in Indonesia
            </h1>
            <p className="w-full text-base">
              A young, cheerful software engineer who started his professional
              career at 19 years old, driven by curiosity to understand how
              technology makes everything appear magical.
            </p>
            <div className="md:space-x-4 space-x-2">
              <Button variant="secondary" size="lg">
                GET IN TOUCH{" "}
              </Button>
              <Button variant="primaryOutlined" size="lg">
                VIEW ALL WORKS
              </Button>
            </div>
          </div>
          <div className="md:w-5/12 w-full h-120 relative">
            <Image
              src="/static/profile-picture.jpg"
              alt="profile-picture"
              width={300}
              height={300}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="md:mt-0 mt-10">
        <Ribbon />
      </div>
    </div>
  );
}
