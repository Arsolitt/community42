import { motion } from "framer-motion";

import cls from "./NavbarDefault.module.scss";
import { MarketIcon, MessageIcon } from "@/shared/assets/icons/";

interface NavbarDefaultProps {
  openContacts: () => void;
}

export const NavbarDefault = (props: NavbarDefaultProps) => {
  const { openContacts } = props;
  return (
    <ul className={cls.NavbarDefault}>
      <motion.div
        key={openContacts ? "shown" : "normal"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <li>
          <button onClick={openContacts} className={cls.contacts}>
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
      </motion.div>
    </ul>
  );
};
