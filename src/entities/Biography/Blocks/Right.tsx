import Image from "next/image";

import cls from "../Biography.module.scss";

interface BiographyRightBlockProps {
  fullSizeImage: string;
  name: string;
}

export const BiographyRightBlock = (props: BiographyRightBlockProps) => {
  const { fullSizeImage, name } = props;
  return (
    <Image
      src={fullSizeImage}
      width={400}
      height={310}
      className={cls.image}
      alt={`Фотография сотрудника ${name}`}
    />
  );
};
