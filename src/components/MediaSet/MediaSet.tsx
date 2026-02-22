'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface MediaSetProps {
  className?: string;
  images: string[];
  gif?: string;
}

export const MediaSet = ({ className, images, gif }: MediaSetProps) => {
  const [isHover, setIsHover] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isHover || images.length === 0) {
      setCurrentImageIndex(0);
      return;
    }

    if (gif) return;

    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isHover, gif, images.length]);

  const src = isHover && gif ? gif : images[currentImageIndex];

  return (
    <Image
      fill
      alt="media"
      className={className}
      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
      src={src}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      priority={false}
    />
  );
};
