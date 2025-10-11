import { classNames } from "@features/helpers/className";
import { ArrowIcon } from "@shared/assets/icons/arrow";

import cls from "./RouterLink.module.css";

interface RouterLinkProps {
  className?: string;
}

export const RouterLink = ({ className }: RouterLinkProps) => {
  return (
    <div className={classNames(cls.RouterLink, {}, [className])}>
      <ArrowIcon />
    </div>
  );
};
