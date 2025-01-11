'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { classNames } from '@/features/helpers/className';
import { Logo } from '@/shared/ui/Logo';
import { LogoTheme } from '@/shared/ui/Logo/LogoTheme';

import styles from './header.module.scss';

interface HeaderProps {
  className?: string;
  manualScrolled?: boolean;
}

export const Header = (props: HeaderProps) => {
  const { className, manualScrolled } = props;

  const [scrolled, setScrolled] = useState(manualScrolled || false);
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    if (!manualScrolled) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [manualScrolled, handleScroll]);

  return (
    <header className={classNames(scrolled ? styles.wrapperAnimated : styles.wrapper, {}, [className])}>
      <motion.div
        key={scrolled ? 'scrolled' : 'normal'}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        initial={{ y: -10, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.35 }}
      >
        <Link href="/">
          <Logo theme={scrolled ? LogoTheme.ANIMATION : LogoTheme.NORMAL} />
        </Link>
      </motion.div>
    </header>
  );
};
