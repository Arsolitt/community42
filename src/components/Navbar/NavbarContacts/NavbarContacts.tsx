import { motion } from "framer-motion";
import Link from "next/link";

import { Typography } from "@/components/Typography";
import { classNames } from "@/features/helpers/className";
import { CloseContactsIcon, EmailIcon, TelegramIcon, VkIcon, WhatsappIcon } from "@/shared/assets/icons";

import cls from "./NavbarContacts.module.css";

interface NavbarContactsProps {
  className?: string;
  closeContacts: () => void;
}

export const NavbarContacts = (props: NavbarContactsProps) => {
  const { className, closeContacts } = props;
  return (
    <div className={classNames(null, {}, [className])}>
      <motion.div
        key={closeContacts ? "shown" : "normal"}
        animate={{ opacity: 1 }}
        className={cls.navbar_contacts}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <button className={cls.close_contacts} type='button' onClick={closeContacts}>
          <CloseContactsIcon />
          <Typography variant='span'>закрыть контакты</Typography>
        </button>
        <ul className={cls.contacts_list}>
          <li>
            <Link href=''>
              <VkIcon />
            </Link>
          </li>
          <li>
            <Link href=''>
              <TelegramIcon />
            </Link>
          </li>
          <li>
            <Link href=''>
              <WhatsappIcon />
            </Link>
          </li>
          <li>
            <Link href=''>
              <EmailIcon />
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};
