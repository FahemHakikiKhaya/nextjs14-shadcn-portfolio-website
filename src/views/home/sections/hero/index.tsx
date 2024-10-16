import Image from "next/image";
import AnimatedText from "./components/AnimatedText";

export default function HeroSection() {
  return (
    <div className="lg:h-screen h-[80vh] lg:flex-row flex flex-col-reverse justify-between lg:gap-0 gap-5">
      <div className="lg:w-6/12 w-full flex lg:flex-col flex-col justify-center items-center">
        <div className="lg:text-8xl text-4xl font-bold leading-snug max-w-[550px] text-center">
          LIVING TO
          <AnimatedText />
        </div>
        <div className="font-bold text-lg mt-5">
          FULLSTACK DEVELOPER IN INDONESIA
        </div>
      </div>
      <div className="lg:w-6/12 w-full h-screen relative">
        <Image
          src="/static/profile-picture.jpg"
          alt="profile-picture"
          layout="fill"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
