import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

const FooterItem: FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <div className="text-3xl font-bold opacity-100 group-hover:opacity-10 transition-opacity duration-300">
        {children}
      </div>
    </Link>
  );
};

const connects = [
  { name: "Email", link: "mailto:hakikihaya@gmail.com" },
  {
    name: "Instagram",
    link: "https://www.instagram.com/fahemkhaya/",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/fahem-khakiki-khaya-b9228a207/",
  },
  {
    name: "Github",
    link: "https://github.com/FahemHakikiKhaya",
  },
  {
    name: "leetcode",
    link: "https://leetcode.com/u/hakikihaya/",
  },
];

const stacks = [
  { name: "Next Js", link: "https://nextjs.org/" },
  {
    name: "frmer motion",
    link: "https://www.framer.com/motion/",
  },
  {
    name: "tailwind css",
    link: "https://tailwindcss.com/",
  },
  {
    name: "shadcn ui",
    link: "https://ui.shadcn.com/",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="container border border-solid border-gray-800 border-l my-14 lg:my-20" />
      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4 container gap-x-2 pb-10">
        <div className="uppercase">
          <div className="text-sm mb-4">Connect</div>
          <div className="group">
            {React.Children.toArray(
              connects.map((connect) => (
                <FooterItem href={connect.link}>{connect.name}</FooterItem>
              ))
            )}
          </div>
        </div>
        <div className="uppercase flex flex-col">
          <div className="text-sm mb-4">Powered By</div>
          <div className="group">
            {React.Children.toArray(
              stacks.map((stack) => (
                <FooterItem href={stack.link}>{stack.name}</FooterItem>
              ))
            )}
          </div>
          <div className="text-sm mt-auto lg:pt-20 pt-14">
            © 2024 - INSPIRED BY RIVEN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
