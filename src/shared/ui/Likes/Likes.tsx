import { classNames } from "@/features/helpers/className";
import { Typography } from "../Typography";
import { LikeIcon } from "@/shared/assets/icons";
import cls from "./Likes.module.scss";

interface LikesProps {
  likes: number;
  className?: string;
  svg?: {
    width: number;
    height: number;
  };
}

export const Likes = (props: LikesProps) => {
  const { likes, className, svg } = props;
  return (
    <div className={classNames(cls.Likes, {}, [className])}>
      <LikeIcon />
      <Typography variant="p" className={cls.Likes__text}>
        {likes}
      </Typography>
    </div>
  );
};
