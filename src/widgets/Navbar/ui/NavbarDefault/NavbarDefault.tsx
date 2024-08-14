import cls from "./NavbarDefault.module.scss";
import { MarketIcon, MessageIcon } from "@/shared/assets/icons/";

interface NavbarDefaultProps {
  className?: string;
  openContacts: () => void;
}

export const NavbarDefault = (props: NavbarDefaultProps) => {
  const { className, openContacts } = props;
  return (
    <ul className={cls.NavbarDefault}>
      <li>
        <button onClick={openContacts}>
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
