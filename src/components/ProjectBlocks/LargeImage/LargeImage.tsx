import Image from 'next/image';

interface LargeImageProps {
  alt?: string;
  className?: string;
  src: string;
}

export const LargeImage = ({ src, alt = 'image', className }: LargeImageProps) => {
  return (
    <Image
      alt={alt}
      className={className}
      height={1032}
      quality={100}
      sizes='(min-width: 1920px) 1836px, 1180px'
      src={src}
      width={1836}
    />
  );
};
