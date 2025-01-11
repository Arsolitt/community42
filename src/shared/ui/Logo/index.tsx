import Image from 'next/image';

import { classNames } from '@/features/helpers/className';

import { LogoTheme } from './LogoTheme';

import cls from './Logo.module.scss';

interface LogoProps {
  className?: string;
  theme?: LogoTheme;
}

export const Logo = (props: LogoProps) => {
  const { className, theme = LogoTheme.NORMAL } = props;
  return (
    <div className={classNames(cls.LogoContainer, {}, [className, cls[theme]])}>
      <div className={classNames(cls.LogoWrapper)}>
        <Image
          alt='logotype'
          className={classNames(cls.Logo)}
          height={67}
          src='/logo.svg'
          width={59}
        />
      </div>
      <Image
        alt='community'
        className={cls.hiddenLogo}
        height={21}
        src='/images/community.svg'
        width={156}
      />
    </div>
  );
};
