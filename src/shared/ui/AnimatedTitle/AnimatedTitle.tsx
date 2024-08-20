"use client";
import { motion } from "framer-motion";

import { Typography } from "@/shared/ui/Typography";
import { CloseIcon } from "@/shared/assets/icons/close";
import cls from "./AnimatedTitle.module.scss";

interface AnimatedTitleProps {
  header: {
    first: string;
    second: string;
  };
  customTransformX?: {
    negative: string;
    positive: string;
  };
}

export const AnimatedTitle = (props: AnimatedTitleProps) => {
  const { header, customTransformX } = props;
  return (
    <div className={cls.sectionTitle}>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{
          x: `-${customTransformX?.negative ?? "157%"}`,
          opacity: 1,
        }}
        transition={{ ease: "easeOut", duration: 0.75 }}
        viewport={{ once: true, amount: 1 }}
      >
        <Typography variant="h2">{header.first}</Typography>
      </motion.div>
      <motion.div
        initial={{ transform: "rotate(0deg)" }}
        whileInView={{ transform: "rotate(360deg)" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
      >
        <CloseIcon />
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{
          x: `${customTransformX?.positive ?? "130%"}`,
          opacity: 1,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2">{header.second}</Typography>
      </motion.div>
    </div>
  );
};
