import { motion } from 'framer-motion';

import { MarketIcon, MessageIcon } from '@/shared/assets/icons/';

import cls from './NavbarDefault.module.scss';

interface NavbarDefaultProps {
  openContacts: () => void;
}

export const NavbarDefault = (props: NavbarDefaultProps) => {
  const { openContacts } = props;
  return (
    <ul className={cls.NavbarDefault}>
      <motion.div
        key={openContacts ? 'shown' : 'normal'}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <li>
          <button className={cls.contacts} type='button' onClick={openContacts}>
            <MessageIcon />
            контакты
          </button>
        </li>
        <li>
          <div className={cls.order}>
            <button type='button'>заказать стилёк</button>
          </div>
        </li>
        <li>
          <button type='button'>
            <MarketIcon />
            магазинчик
          </button>
        </li>
      </motion.div>
    </ul>
  );
};
