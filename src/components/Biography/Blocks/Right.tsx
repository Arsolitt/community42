import Image from 'next/image';

import cls from '../Biography.module.scss';

interface BiographyRightBlockProps {
  fullSizeImage: string;
  name: string;
}

export const BiographyRightBlock = (props: BiographyRightBlockProps) => {
  const { fullSizeImage, name } = props;
  return (
    <Image alt={`Фотография сотрудника ${name}`} className={cls.image} height={310} src={fullSizeImage} width={400} />
  );
};
