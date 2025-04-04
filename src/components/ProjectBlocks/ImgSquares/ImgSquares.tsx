// Шаблон фоток  “два квадрата”
// Шаблон фоток  “три квадрата”
import Image from 'next/image';

import { classNames } from '@/features/helpers/className';

import cls from './ImgSquares.module.scss';

interface ImageInfo {
  alt: string;
  src: string;
}

interface ImgSquaresProps {
  className?: string;
  images: ImageInfo[];
}

export const ImgSquares = ({ className, images }: ImgSquaresProps) => {
  return (
    <div className={classNames(cls.imgSquares, {}, [className])}>
      {images.map((image) => (
        <div key={image.src} className={cls.gridItem}>
          <Image
            fill
            alt={image.alt}
            quality={100}
            sizes='50vw'
            src={image.src}
          />
        </div>
      ))}
    </div>
  );
};
