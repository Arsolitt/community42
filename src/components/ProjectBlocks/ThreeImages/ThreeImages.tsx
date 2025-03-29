import Image from 'next/image';

import { classNames } from '@/features/helpers/className';

import cls from './ThreeImages.module.scss';

interface ImageInfo {
  alt: string;
  src: string;
}

interface ThreeImagesProps {
  className?: string;
  images: ImageInfo[];
}

export const ThreeImages = ({ className, images }: ThreeImagesProps) => {
  return (
    <div className={classNames(cls.threeImages, {}, [className])}>
      {images.map((image, index) => (
        <div key={image.src} className={classNames(cls.gridItem, {}, [cls[`item${index}`]])}>
          <Image
            alt={image.alt}
            height={908}
            quality={100}
            src={image.src}
            width={908}
          />
        </div>
      ))}
    </div>
  );
};
