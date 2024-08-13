import { classNames } from "@/features/helpers/className";
import cls from "./NavbarDefault.module.scss";
import { MarketIcon, MessageIcon, SearchIcon } from "@/shared/assets/icons/";

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
          <div className={cls.order}>
            <button>заказать стилёк</button>
          </div>
        </li>
        <li>
          <button>
            <MarketIcon />
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
