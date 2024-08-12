import { classNames } from "@/features/helpers/className";
import { TeamLeftBlock } from "./Blocks/Left";
import { TeamRightBlock } from "./Blocks/Right";
import cls from "./Team.module.scss";
import { TeamTitle } from "./Title/Title";

interface TeamProps {
  className?: string;
}

export const Team = ({ className }: TeamProps) => {
  return (
    <section className={classNames(cls.Team, {}, [className])}>
      <TeamTitle />
      <div className={cls.sectionContent}>
        <TeamLeftBlock />
        <TeamRightBlock />
      </div>
    </section>
  );
};
