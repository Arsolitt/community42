import Image from "next/image";
import { classNames } from "@/features/helpers/className";
import cls from "./Logo.module.scss";

export enum LogoTheme {
  ANIMATION = "animation",
  NORMAL = "normal",
}

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
          className={classNames(cls.Logo)}
          src="/logo.svg"
          alt="logotype"
          width={59}
          height={67}
        />
      </div>
      <Image
        src="/images/community.svg"
        alt="community"
        width={156}
        height={21}
        className={cls.hiddenLogo}
      />
    </div>
  );
};
