// Шаблон фоток "три вертикальных 10:15"
import Image from "next/image";

import { classNames } from "@features/helpers/className";

import cls from "./ImgVertical.module.css";

interface ImageInfo {
  alt: string;
  src: string;
}

interface ImgVerticalProps {
  className?: string;
  images: ImageInfo[];
}

export const ImgVertical = ({ className, images }: ImgVerticalProps) => {
  return (
    <div className={classNames(cls.imgVertical, {}, [className])}>
      {images.map((image) => (
        <div key={image.src} className={cls.gridItem}>
          <Image
            fill
            alt={image.alt}
            className={cls.image}
            quality={100}
            sizes='(min-width: 1280px) 33vw, 100vw'
            src={image.src}
          />
        </div>
      ))}
    </div>
  );
};
