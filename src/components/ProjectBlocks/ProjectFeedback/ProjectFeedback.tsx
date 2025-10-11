import { classNames } from "@/features/helpers/className";
import { LikeIcon } from "@/shared/assets/icons"; // Предполагаем, что иконки есть
import { ShareIcon } from "@/shared/assets/icons/share";

import { TimeIcon } from "../../../shared/assets/icons/time";

import cls from "./ProjectFeedback.module.css";

interface ProjectFeedbackProps {
  className?: string;
  creationDate: string;
  creationTimeText: string;
  description?: string;
  likes: number;
  title?: string;
  onLike?: () => void;
  onShare?: () => void;
}

export const ProjectFeedback = ({
  className,
  title = "Понравился проект?",
  description = "Можете поставить лайк и сохранить проект у себя в социальных сетях, как референс или источник вдохновения :)",
  likes,
  creationTimeText,
  creationDate,
  onLike,
  onShare
}: ProjectFeedbackProps) => {
  return (
    <div className={classNames(cls.projectFeedback, {}, [className])}>
      <div className={cls.leftColumn}>
        <h2 className={cls.title}>{title}</h2>
        <p className={cls.description}>{description}</p>
        <div className={cls.actions}>
          <button aria-label='Лайк' className={cls.actionButton} type='button' onClick={onLike}>
            <LikeIcon />
            <span>{likes}</span>
          </button>
          <button aria-label='Поделиться' className={cls.actionButton} type='button' onClick={onShare}>
            <ShareIcon className={cls.icon} />
          </button>
        </div>
      </div>
      <div className={cls.rightColumn}>
        <div className={cls.creationInfo}>
          <TimeIcon className={cls.icon} />
          <span className={cls.creationTime}>{creationTimeText}</span>
        </div>
        <span className={cls.creationDate}>{creationDate}</span>
      </div>
    </div>
  );
};
