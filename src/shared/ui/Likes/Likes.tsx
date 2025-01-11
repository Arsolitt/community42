import { classNames } from '@/features/helpers/className';
import { LikeIcon } from '@/shared/assets/icons';

import { Typography } from '../Typography';

import cls from './Likes.module.scss';

interface LikesProps {
  className?: string;
  likes: number;
  svg?: {
    width: number;
    height: number;
  };
}

export const Likes = (props: LikesProps) => {
  const { likes, className } = props;
  return (
    <div className={classNames(cls.Likes, {}, [className])}>
      <LikeIcon />
      <Typography className={cls.Likes__text} variant="p">
        {likes}
      </Typography>
    </div>
  );
};
