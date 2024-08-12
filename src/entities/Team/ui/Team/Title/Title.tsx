"use client";
import { motion } from "framer-motion";

import { Typography } from "@/shared/ui/Typography";
import { CloseIcon } from "@/shared/assets/icons/close";
import cls from "../Team.module.scss";

export const TeamTitle = () => (
  <div className={cls.sectionTitle}>
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: "-157%", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.75 }}
      viewport={{ once: true, amount: 1 }}
    >
      <Typography variant="h2">работа</Typography>
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
      whileInView={{ x: "130%", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Typography variant="h2">команда</Typography>
    </motion.div>
  </div>
);
