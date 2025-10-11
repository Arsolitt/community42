"use client";
import { useEffect } from "react";

export const LocomativeScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return <main>{children}</main>;
};
