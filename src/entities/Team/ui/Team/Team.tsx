import { classNames } from '@/features/helpers/className';
import { AnimatedTitle } from '@/shared/ui/AnimatedTitle/AnimatedTitle';

import { TeamLeftBlock } from './Blocks/Left';
import { TeamRightBlock } from './Blocks/Right';

import cls from './Team.module.scss';

interface TeamProps {
  className?: string;
}

export const Team = ({ className }: TeamProps) => {
  return (
    <section className={classNames(cls.Team, {}, [className])} id='team' style={{ scrollMarginTop: '30px' }}>
      <AnimatedTitle
        header={{ first: 'работа', second: 'команда' }}
        customTransformX={{ positive: '122%', negative: '148%' }}
      />
      <div className={cls.sectionContent}>
        <TeamLeftBlock />
        <TeamRightBlock />
      </div>
    </section>
  );
};
