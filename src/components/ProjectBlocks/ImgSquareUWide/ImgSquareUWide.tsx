import Image from 'next/image';

import { classNames } from '@/features/helpers/className';

import cls from './ImgSquareUWide.module.scss';

interface ImageInfo {
  alt: string;
  src: string;
}

interface ImgSquareUWideProps {
  className?: string;
  images: [ImageInfo, ImageInfo]; // Expect exactly two images
}

export const ImgSquareUWide = ({ className, images }: ImgSquareUWideProps) => {
  const [imageSquare, imageWide] = images;

  return (
    <div className={classNames(cls.imgSquareUWide, {}, [className])}>
      <div key={imageSquare.src} className={cls.gridItemSquare}>
        <Image
          fill
          alt={imageSquare.alt}
          quality={100}
          sizes='579px'
          src={imageSquare.src}
        />
      </div>
      <div key={imageWide.src} className={cls.gridItemWide}>
        <Image
          fill
          alt={imageWide.alt}
          quality={100}
          src={imageWide.src}
        />
      </div>
    </div>
  );
};
