import { classNames } from "@/features/helpers/className";
import cls from "./Team.module.scss";

interface TeamProps {
  className?: string;
}

export const Team = ({ className }: TeamProps) => {
  return (
    <section className={classNames(cls.Team, {}, [className])}>
      <h3 className={cls.title}>работа x команда</h3>
    </section>
  );
};
