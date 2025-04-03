import Image from 'next/image';

import { classNames } from '@/features/helpers/className';

import cls from './ImgThreeSquares.module.scss';

interface ImageInfo {
  alt: string;
  src: string;
}

interface ImgThreeSquaresProps {
  className?: string;
  images: ImageInfo[];
}

export const ImgThreeSquares = ({ className, images }: ImgThreeSquaresProps) => {
  return (
    <div className={classNames(cls.imgThreeSquares, {}, [className])}>
      {images.map((image) => (
        <div key={image.src} className={cls.gridItem}>
          <Image
            fill
            alt={image.alt}
            quality={100}
            src={image.src}
          />
        </div>
      ))}
    </div>
  );
};
