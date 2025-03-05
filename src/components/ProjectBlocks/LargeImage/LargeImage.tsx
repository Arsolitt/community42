import Image from 'next/image';

import { classNames } from '@/features/helpers/className';

import cls from './LargeImage.module.scss';

interface LargeImageProps {
  alt: string;
  className?: string;
  src: string;
}

export const LargeImage = ({ className, src, alt }: LargeImageProps) => {
  return (
    <div className={classNames(cls.largeImage, {}, [className])}>
      <Image
        alt={alt}
        height={640}
        quality={100}
        src={src}
        width={1180}
      />
    </div>
  );
};
