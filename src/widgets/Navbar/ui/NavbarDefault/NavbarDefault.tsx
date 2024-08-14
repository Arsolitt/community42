import cls from "./NavbarDefault.module.scss";
import { MarketIcon, MessageIcon } from "@/shared/assets/icons/";

interface NavbarDefaultProps {
  className?: string;
}

export const NavbarDefault = ({ className }: NavbarDefaultProps) => {
  return (
    <ul className={cls.NavbarDefault}>
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
  );
};
