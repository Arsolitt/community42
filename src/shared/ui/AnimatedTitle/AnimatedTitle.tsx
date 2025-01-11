'use client';
import { motion } from 'framer-motion';

import { CloseIcon } from '@/shared/assets/icons/close';
import { Typography } from '@/shared/ui/Typography';

import cls from './AnimatedTitle.module.scss';

interface AnimatedTitleProps {
  customTransformX?: {
    negative: string;
    positive: string;
  };
  header: {
    first: string;
    second: string;
  };
}

export const AnimatedTitle = (props: AnimatedTitleProps) => {
  const { header, customTransformX } = props;
  return (
    <div className={cls.sectionTitle}>
      <motion.div
        whileInView={{
          x: `-${customTransformX?.negative ?? '157%'}`,
          opacity: 1,
        }}
        exit={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
        viewport={{ once: true, amount: 1 }}
      >
        <Typography variant="h2">{header.first}</Typography>
      </motion.div>
      <motion.div
        exit={{ transform: 'rotate(0deg)' }}
        initial={{ marginLeft: 40, transform: 'rotate(0deg)' }}
        whileInView={{ transform: 'rotate(90deg)' }}
        transition={{ ease: 'easeOut', duration: 0.75 }}
        viewport={{ once: true, amount: 1 }}
      >
        <CloseIcon />
      </motion.div>
      <motion.div
        whileInView={{
          x: `${customTransformX?.positive ?? '130%'}`,
          opacity: 1,
        }}
        exit={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.75 }}
        viewport={{ once: true, amount: 1 }}
      >
        <Typography variant="h2">{header.second}</Typography>
      </motion.div>
    </div>
  );
};
