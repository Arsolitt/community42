import { classNames } from "@/features/helpers/className";
import cls from "./Navbar.module.scss";
import { NavbarDefault } from "./ui/NavbarDefault/NavbarDefault";
import { NavbarSearchButton } from "./ui/SearchButton/SearchButton";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <NavbarDefault />
      <NavbarSearchButton />
    </nav>
  );
};
