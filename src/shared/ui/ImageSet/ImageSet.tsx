"use client";

import Image from "next/image";

import { Service } from "@/shared/assets/services";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  images: Service["images"]
  height: number
  width: number
}

export const ImageSet = (props: Props) => {
  const [isHover, setIsHover] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (isHover && props.images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
      }, 1000);
    } else {
      setCurrentImageIndex(0);
    }

    return () => clearInterval(interval);
  }, [isHover, props.images.length]);

  const img = props.images[currentImageIndex];

  return (
    <Image
      src={img}
      alt="image"
      className={props.className}
      width={props.width}
      height={props.height}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      priority={false}
    />
  );
};
