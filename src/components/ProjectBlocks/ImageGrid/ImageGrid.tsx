import Image from 'next/image';

import { classNames } from '@/features/helpers/className';

import cls from './ImageGrid.module.scss';

interface ImageInfo {
  alt: string;
  src: string;
}

interface ImageGridProps {
  className?: string;
  images: ImageInfo[];
}

export const ImageGrid = ({ className, images }: ImageGridProps) => {
  return (
    <div className={classNames(cls.imageGrid, {}, [className])}>
      {images.map((image, index) => (
        <div key={image.src} className={classNames(cls.gridItem, {}, [cls[`item${index}`]])}>
          <Image
            alt={image.alt}
            height={640}
            quality={100}
            src={image.src}
            width={640}
          />
        </div>
      ))}
    </div>
  );
};
