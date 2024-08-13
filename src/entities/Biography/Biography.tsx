import { classNames } from "@/features/helpers/className";
import { BiographyLeftBlock, BiographyRightBlock } from "./Blocks";
import cls from "./Biography.module.scss";

interface BiographyProps {
  className?: string;
}

export const Biography = ({ className }: BiographyProps) => {
  return (
    <section className={classNames(cls.Biography, {}, [className])}>
      <div className="container">
        <BiographyLeftBlock />
        <BiographyRightBlock />
      </div>
    </section>
  );
};
