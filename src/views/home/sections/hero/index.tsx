import Image from "next/image";
import AnimatedText from "./components/AnimatedText";

export default function HeroSection() {
  return (
    <div className="md:h-screen h-[80vh] md:flex-row flex flex-col-reverse justify-between md:gap-0 gap-5">
      <div className="md:w-6/12 w-full flex md:flex-col flex-col justify-center items-center">
        <div className="md:text-8xl text-4xl font-bold leading-snug max-w-[550px] text-center">
          LIVING TO
          <AnimatedText />
        </div>
        <div className="font-bold text-md mt-5">
          FULLSTACK DEVELOPER IN INDONESIA
        </div>
      </div>
      <div className="md:w-6/12 w-full h-screen relative">
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
