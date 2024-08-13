import { classNames } from "@/features/helpers/className";
import cls from "./Footer.module.scss";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return <footer className={classNames(cls.Footer, {}, [className])}></footer>;
};
