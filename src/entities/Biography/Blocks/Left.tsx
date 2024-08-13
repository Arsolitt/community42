import { Typography } from "@/shared/ui/Typography";
import { TelegramIcon, VkIcon, WhatsappIcon } from "@/shared/assets/icons";
import cls from "../Biography.module.scss";

export const BiographyLeftBlock = ({ collaborator }) => {
  const socialIcons = {
    vk: <VkIcon />,
    telegram: <TelegramIcon />,
    whatsapp: <WhatsappIcon />,
  };
  return (
    <div className={cls.leftBlock}>
      <Typography variant="h2" style={{ fontWeight: "700" }}>
        {collaborator?.name}
      </Typography>
      <Typography
        variant="p"
        style={{ fontSize: "20px", fontWeight: "500", lineHeight: "140%" }}
      >
        {collaborator?.description}
      </Typography>

      <div className={cls.socials}>
        {collaborator?.socials.map((s) => (
          <a key={s.name} href={s.href}>
            {socialIcons[s.name]}
          </a>
        ))}
      </div>
    </div>
  );
};
