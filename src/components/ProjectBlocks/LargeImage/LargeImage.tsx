'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface LargeImageProps {
  alt?: string;
  className?: string;
  src: string;
}

export const LargeImage = ({ src, alt = 'image', className }: LargeImageProps) => {
  const [dimensions, setDimensions] = useState({
    width: 1180,
    height: 664
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1920) {
        setDimensions({
          width: 1836,
          height: 1032
        });
      } else {
        setDimensions({
          width: 1180,
          height: 664
        });
      }
    };

    // Инициализация при монтировании
    handleResize();

    // Подписка на изменение размера окна
    window.addEventListener('resize', handleResize);

    // Очистка при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Image
      alt={alt}
      className={className}
      height={dimensions.height}
      quality={100}
      src={src}
      width={dimensions.width}
    />
  );
};
