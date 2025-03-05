import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/shared/assets/projects';

import { classNames } from '@/features/helpers/className';
import { EmailIcon, TelegramIcon, VkIcon, WhatsappIcon } from '@/shared/assets/icons';
import { services } from '@/shared/assets/services';
import { Likes } from '@/shared/ui/Likes';
import { Typography } from '@/shared/ui/Typography';

import cls from './Footer.module.scss';

interface FooterProps {
  className?: string;
  lastProject?: Project;
}

export const Footer = ({ className, lastProject }: FooterProps) => {
  return (
    <div className={cls.footerContainer}>
      {lastProject && (
        <div className={cls.lastProject}>
          <Typography variant='h6'>Оцените нашу последнюю работу</Typography>
          <Image
            alt={lastProject.name}
            className={cls.lastProject__image}
            height={440}
            quality={100}
            src={lastProject.image}
            width={1180}
          />
          <div className={cls.lastProject__characteristics}>
            <Typography style={{ fontSize: '18px', fontWeight: 600 }} variant='p'>
              {lastProject.name}
            </Typography>
            <Likes likes={lastProject.likes} />
          </div>
        </div>
      )}

      <footer className={classNames(cls.footer, {}, [className])}>
        <div className='container'>
          <div className={classNames(cls.footerWrapper, { [cls.footerWrapperNoProject]: !lastProject }, [])}>
            {lastProject && (<div className={cls.separator} />)}
            <div className={cls.bottomContent}>
              <div className={cls.socials}>
                <VkIcon />
                <TelegramIcon />
                <WhatsappIcon />
                <EmailIcon />
              </div>

              <div className={cls.services}>
                {services.map((service) => (
                  <div key={service.slug} className={cls.services__item}>
                    <Link href={service.link} className={cls.services__link}>
                      {service.text}
                    </Link>
                    <div className={cls.underline} />
                  </div>
                ))}
              </div>

              <div className={cls.description}>
                <Typography className={cls.descriptionTitle} variant='p'>
                  г. Кемерово
                </Typography>
                <Typography className={cls.descriptionText} variant='span'>
                  съёмка видео и фото происходит в основном в этом городе
                </Typography>
              </div>
            </div>
            {!lastProject && (<div className={cls.separator} />)}
            <div className={cls.copyright}>
              <Typography variant='p'>© 2024. Все права защищены</Typography>
              <Typography variant='p'>Заходите к нам чаще за новой порцией креативчика ;)</Typography>
              <Typography variant='p'>творческая команда Комьюнити</Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
