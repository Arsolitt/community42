import { classNames } from "@/features/helpers/className";
import { SearchIcon } from "@/shared/assets/icons";
import cls from "./NavbarSearchButton.module.scss";

interface SearchButtonProps {
  className?: string;
}

export const NavbarSearchButton = ({ className }: SearchButtonProps) => {
  return (
    <div className={classNames(cls.SearchButton, {}, [className])}>
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};
