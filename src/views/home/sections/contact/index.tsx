import InViewAnimation from "@/components/in-view-animation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div
      className="container h-screen flex md:flex-row flex-col md:mb-20 mb-16 md:gap-0 gap-14"
      id="contact-section"
    >
      <div className="md:w-6/12 w-full h-screen relative">
        <Image
          src="/static/teamwork2.png"
          alt="profile-picture"
          layout="fill"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="md:w-6/12 w-full flex flex-col items-center justify-center">
        <InViewAnimation>
          <div className="md:text-7xl text-4xl font-bold mb-4 text-center">
            LET&apos;S WORK TOGETHER
          </div>
        </InViewAnimation>
        <Button variant="primaryOutlined" size="lg" className="md:mt-7 mt-5">
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default ContactSection;
