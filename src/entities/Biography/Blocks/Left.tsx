import { TelegramIcon, VkIcon, WhatsappIcon } from '@/shared/assets/icons';
import { Typography } from '@/shared/ui/Typography';

import cls from '../Biography.module.scss';

export const BiographyLeftBlock = ({ collaborator }) => {
  const socialIcons = {
    vk: <VkIcon />,
    telegram: <TelegramIcon />,
    whatsapp: <WhatsappIcon />
  };
  return (
    <div className={cls.leftBlock}>
      <Typography style={{ fontWeight: '700' }} variant='h2'>
        {collaborator?.name}
      </Typography>
      <Typography style={{ fontSize: '20px', fontWeight: '500', lineHeight: '140%' }} variant='p'>
        {collaborator?.description}
      </Typography>

      <div className={cls.socials}>
        {collaborator?.socials.map((s) => (
          <a href={s.href} key={s.name}>
            {socialIcons[s.name]}
          </a>
        ))}
      </div>
    </div>
  );
};
