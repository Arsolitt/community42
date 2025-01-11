import { motion } from 'framer-motion';

import { classNames } from '@/features/helpers/className';
import { CloseContactsIcon, EmailIcon, TelegramIcon, VkIcon, WhatsappIcon } from '@/shared/assets/icons';
import { Typography } from '@/shared/ui/Typography';

import cls from './NavbarContacts.module.scss';

interface NavbarContactsProps {
  className?: string;
  closeContacts: () => void;
}

export const NavbarContacts = (props: NavbarContactsProps) => {
  const { className, closeContacts } = props;
  return (
    <div className={classNames(cls.NavbarContacts, {}, [className])}>
      <motion.div
        key={closeContacts ? 'shown' : 'normal'}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <button type='button' onClick={closeContacts}>
          <CloseContactsIcon />
          <Typography variant='span'>закрыть контакты</Typography>
        </button>
        <div>
          <li>
            <VkIcon />
          </li>
          <li>
            <TelegramIcon />
          </li>
          <li>
            <WhatsappIcon />
          </li>
          <li>
            <EmailIcon />
          </li>
        </div>
      </motion.div>
    </div>
  );
};
