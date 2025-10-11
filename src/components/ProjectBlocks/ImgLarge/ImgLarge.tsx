import Image from "next/image";

import { classNames } from "@/features/helpers/className";

import cls from "./ImgLarge.module.css";

interface ImgLargeProps {
  alt: string;
  className?: string;
  src: string;
}

export const ImgLarge = ({ alt, className, src }: ImgLargeProps) => {
  return (
    <div className={classNames(cls.imgLarge, {}, [className])}>
      <Image fill alt={alt} quality={100} sizes='100vw' src={src} />
    </div>
  );
};
