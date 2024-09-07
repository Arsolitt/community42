"use client";

import Image from "next/image";

import { Service } from "@/shared/assets/services";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  image: Service["image"]
  images: Service["images"]
}

export const ImageSet = (props: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (isHovering && props.images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
      }, 1000);
    } else {
      setCurrentImageIndex(0);
    }

    return () => clearInterval(interval);
  }, [isHovering, props.images.length]);

  const img = props.images[currentImageIndex] || props.image;

  return (
    <Image
      src={img}
      alt="image"
      className={props.className}
      width={280}
      height={154}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      priority={true}
    />
  );
};
