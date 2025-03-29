import Image from 'next/image';

import { classNames } from '@/features/helpers/className';

import cls from './TwoImages.module.scss';

interface ImageInfo {
  alt: string;
  src: string;
}

interface TwoImagesProps {
  className?: string;
  images: ImageInfo[];
}

export const TwoImages = ({ className, images }: TwoImagesProps) => {
  return (
    <div className={classNames(cls.twoImages, {}, [className])}>
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
