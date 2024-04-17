import Ribbon from "@/components/ribbon";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="h-screen pt-24 flex flex-col justify-between">
      <div className="container mt-16">
        <div className="flex flex-row justify-between items-center">
          <div className="w-6/12 flex flex-col space-y-7">
            <h1 className="text-6xl font-extrabold leading-snug">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-floral via-fieryrose via-coral to-yelloworange">
                Hello, I'm Fahem, <br />
              </span>
              full stack developer based in Indonesia
            </h1>
            <p className="w-full text-base">
              A young, cheerful software engineer who started his professional
              career at 19 years old, driven by curiosity to understand how
              technology makes everything appear magical.
            </p>
            <div className="space-x-4">
              <Button variant="secondary" size="lg">
                GET IN TOUCH{" "}
              </Button>
              <Button variant="primaryOutlined" size="lg">
                VIEW ALL WORKS
              </Button>
            </div>
          </div>
          <div className="w-5/12 h-120 relative">
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
      <Ribbon />
    </div>
  );
}
