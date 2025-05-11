import { motion } from 'framer-motion';

import { Typography } from '@/components/Typography';
import { classNames } from '@/features/helpers/className';
import { MarketIcon, MessageIcon } from '@/shared/assets/icons/';

import cls from './NavbarDefault.module.css';

interface NavbarDefaultProps {
  className?: string;
  openContacts: () => void;
}

export const NavbarDefault = (props: NavbarDefaultProps) => {
  const { className, openContacts } = props;
  return (
    <div className={classNames(null, {}, [className])}>
      <motion.div
        key={openContacts ? 'shown' : 'normal'}
        animate={{ opacity: 1 }}
        className={cls.navbar_default}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <button
          className={cls.contacts_button}
          type='button'
          onClick={openContacts}
        >
          <MessageIcon />
          <Typography variant='span'>контакты</Typography>
        </button>
        <button className={cls.order_button} type='button'>
          <Typography variant='span'>заказать стилёк</Typography>
        </button>
        <button className={cls.shop_button} type='button'>
          <MarketIcon />
          <Typography variant='span'>магазинчик</Typography>
        </button>
      </motion.div>
    </div>
  );
};
