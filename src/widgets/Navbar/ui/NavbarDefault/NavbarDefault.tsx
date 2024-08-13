import { classNames } from "@/features/helpers/className";
import cls from "./NavbarDefault.module.scss";
import { MessageIcon, SearchIcon } from "@/shared/assets/icons/";

interface NavbarDefaultProps {
  className?: string;
}

export const NavbarDefault = ({ className }: NavbarDefaultProps) => {
  return (
    <nav className={classNames(cls.NavbarDefault, {}, [className])}>
      <ul>
        <li>
          <button>
            <MessageIcon />
            контакты
          </button>
        </li>
        <li>
          <button className={cls.order}>стилёк</button>
        </li>
        <li>
          <button>
            <MessageIcon />
            магазинчик
          </button>
        </li>
      </ul>
      <button>
        <SearchIcon />
      </button>
    </nav>
  );
};
