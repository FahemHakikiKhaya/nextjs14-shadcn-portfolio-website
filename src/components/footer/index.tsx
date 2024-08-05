import { FC, PropsWithChildren } from "react";

const FooterItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="text-3xl font-bold opacity-100 group-hover:opacity-10 transition-opacity duration-300">
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="container border border-solid border-gray-800 border-l my-20" />
      <div className="grid md:grid-cols-4 container gap-x-2 pb-10">
        <div className="uppercase">
          <div className="text-sm mb-4">Connect</div>
          <div className="group">
            <FooterItem> Email</FooterItem>
            <FooterItem>Instagram</FooterItem>
            <FooterItem>Linkedin</FooterItem>
            <FooterItem>Github</FooterItem>
            <FooterItem>Leetcode</FooterItem>
          </div>
        </div>
        <div className="uppercase flex flex-col">
          <div className="text-sm mb-4">Powered By</div>
          <div className="group">
            <FooterItem>Next JS</FooterItem>
            <FooterItem>Framer Motion</FooterItem>
            <FooterItem>Tailwind</FooterItem>
            <FooterItem>Shadcn</FooterItem>
          </div>
          <div className="text-sm mt-auto pt-20">
            © 2024 - INSPIRED BY RIVEN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
