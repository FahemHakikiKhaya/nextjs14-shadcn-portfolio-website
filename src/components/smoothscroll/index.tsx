"use client";

import ReactLenis from "lenis/react";
import { FC, PropsWithChildren } from "react";

const SmoothScroll: FC<PropsWithChildren> = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
