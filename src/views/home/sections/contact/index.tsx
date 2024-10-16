import InViewAnimation from "@/components/in-view-animation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div
      className="container h-screen flex lg:flex-row flex-col lg:mb-20 mb-16 lg:gap-0 gap-14"
      id="contact-section"
    >
      <div className="lg:w-6/12 w-full h-screen relative">
        <Image
          src="/static/teamwork2.png"
          alt="profile-picture"
          layout="fill"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-6/12 w-full flex flex-col items-center justify-center">
        <InViewAnimation>
          <div className="lg:text-7xl text-4xl font-bold mb-4 text-center">
            LET&apos;S WORK TOGETHER
          </div>
        </InViewAnimation>
        <Link
          href="mailto:hakikihaya@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button variant="primaryOutlined" size="lg" className="lg:mt-7 mt-5">
            Contact Me
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
