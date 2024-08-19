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
    </div>
  );
};
