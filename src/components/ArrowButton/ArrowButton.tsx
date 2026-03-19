import { classNames } from "@features/helpers/className";

import cls from "./ArrowButton.module.css";

export interface ArrowButtonProps {
  className?: string;
}

export const ArrowButton = ({ className }: ArrowButtonProps) => {
  return (
    <span className={classNames(cls.arrowButton, {}, [className])} role="button" tabIndex={0} aria-label="Перейти" />
  );
};
