import { classNames } from "@/features/helpers/className";
import { TeamLeftBlock } from "./Blocks/Left";
import { TeamRightBlock } from "./Blocks/Right";
import { AnimatedTitle } from "@/shared/ui/AnimatedTitle/AnimatedTitle";
import cls from "./Team.module.scss";

interface TeamProps {
  className?: string;
}

export const Team = ({ className }: TeamProps) => {
  return (
    <section className={classNames(cls.Team, {}, [className])}>
      <AnimatedTitle header={{ first: "работа", second: "команда" }} />
      <div className={cls.sectionContent}>
        <TeamLeftBlock />
        <TeamRightBlock />
      </div>
    </section>
  );
};
