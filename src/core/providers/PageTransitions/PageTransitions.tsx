'use client'
import { useEffect, useState } from "react";

import { classNames } from "@/features/helpers/className";
import cls from "./PageTransitions.module.scss";

export const PageTransitionsProvider = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  const [previousPath, setPreviousPath] = useState<string | null>(null);
  const [isAnimationStarted, setIsAnimationStarted] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);


  return (
    <div className={classNames(cls.PageTransitions, {
      [cls.PageTransitions_slideDown]: isAnimationStarted,
      // [cls.PageTransitions_fadeOut]: true,
    }, [])}>
      <div className={classNames(cls.PageTransitions__content, {
        [cls.PageTransitions__content_visible]: isContentVisible,
      }, [])}>
        {children}
      </div>
    </div>
  );
};
