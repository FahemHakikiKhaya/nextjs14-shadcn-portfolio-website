import InViewAnimation from "@/components/in-view-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div
      className="container lg:mt-28 mt-16 flex flex-col items-center"
      id="about-section"
    >
      <InViewAnimation>
        <div className="text-sm mb-4">ABOUT ME</div>
      </InViewAnimation>
      <div className="text-center max-w-[750px]">
        <InViewAnimation>
          <div className="lg:text-4xl text-2xl text-center font-extrabold mt-1">
            Hello, I&apos;m Fahem, an experienced fullstack developer fueled by
            an insatiable curiosity <br />
            <br />
          </div>
        </InViewAnimation>
        <InViewAnimation>
          <div className="lg:text-4xl text-2xl text-center font-extrabold mt-1">
            Uncovering the secrets behind how technology transforms everyday
            experiences into something truly magical
          </div>
        </InViewAnimation>
      </div>
      <InViewAnimation>
        <div className="mt-4">Based in Jakarta</div>
        <Link
          href="https://www.linkedin.com/in/fahem-khakiki-khaya-b9228a207"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button variant="primaryOutlined" size="lg" className="mt-7">
            Read More
          </Button>
        </Link>
      </InViewAnimation>
    </div>
  );
};

export default AboutSection;
