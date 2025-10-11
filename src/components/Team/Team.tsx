import { AnimatedTitle } from "@/components/AnimatedTitle/AnimatedTitle";
import { classNames } from "@features/helpers/className";

import { TeamLeftBlock } from "./LeftBlock";
import { TeamRightBlock } from "./RightBlock";

import cls from "./Team.module.css";

interface TeamProps {
  className?: string;
}

export const Team = ({ className }: TeamProps) => {
  return (
    <section className={classNames(cls.Team, {}, [className])} id='team' style={{ scrollMarginTop: "30px" }}>
      <AnimatedTitle
        header={{ first: "работа", second: "команда" }}
        customTransformX={{ positive: "122%", negative: "148%" }}
      />
      <div className={cls.sectionContent}>
        <TeamLeftBlock />
        <TeamRightBlock />
      </div>
    </section>
  );
};
