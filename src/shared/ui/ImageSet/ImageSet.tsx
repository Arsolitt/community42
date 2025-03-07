'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ImageSetProps {
  className?: string;
  height: number;
  images: string[];
  width: number;
}

export const ImageSet = (props: ImageSetProps) => {
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
      alt='image'
      className={props.className}
      height={props.height}
      src={img}
      width={props.width}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      priority={false}
    />
  );
};
