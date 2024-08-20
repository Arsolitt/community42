import { motion } from "framer-motion";

import { classNames } from "@/features/helpers/className";
import cls from "./NavbarContacts.module.scss";
import {
  TelegramIcon,
  VkIcon,
  WhatsappIcon,
  EmailIcon,
  CloseContactsIcon,
} from "@/shared/assets/icons";
import { Typography } from "@/shared/ui/Typography";

interface NavbarContactsProps {
  className?: string;
  closeContacts: () => void;
}

export const NavbarContacts = (props: NavbarContactsProps) => {
  const { className, closeContacts } = props;
  return (
    <div className={classNames(cls.NavbarContacts, {}, [className])}>
      <motion.div
        key={closeContacts ? "shown" : "normal"}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <button onClick={closeContacts}>
          <CloseContactsIcon />
          <Typography variant="span">закрыть контакты</Typography>
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
