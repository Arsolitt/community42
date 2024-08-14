import { classNames } from "@/features/helpers/className";
import cls from "./NavbarContacts.module.scss";
import {
  TelegramIcon,
  VkIcon,
  WhatsappIcon,
  EmailIcon,
  CloseContactsIcon,
} from "@/shared/assets/icons";

interface NavbarContactsProps {
  className?: string;
  closeContacts: () => void;
}

export const NavbarContacts = (props: NavbarContactsProps) => {
  const { className, closeContacts } = props;
  return (
    <ul className={classNames(cls.NavbarContacts, {}, [className])}>
      <button onClick={closeContacts}>
        <CloseContactsIcon /> закрыть контакты
      </button>
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
    </ul>
  );
};
