import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/data/projects';

import { Likes } from '@/components/Likes';
import { Typography } from '@/components/Typography';
import { allServices } from '@/data/services';
import { classNames } from '@/features/helpers/className';
import { EmailIcon, TelegramIcon, VkIcon, WhatsappIcon } from '@/shared/assets/icons';

import cls from './Footer.module.css';

interface FooterProps {
  className?: string;
  isProjectPage?: boolean;
  lastProject?: Project;
}

export const Footer = ({ className, isProjectPage, lastProject }: FooterProps) => {
  const containerMods = {
    [cls.noTopSpacing]: isProjectPage
  };

  return (
    <div className={classNames(cls.footerContainer, containerMods, [])}>
      {lastProject && (
        <div className={cls.lastProject}>
          <Typography variant='h6'>Оцените нашу последнюю работу</Typography>
          <div>
            <Link href={`/projects/${lastProject.slug}`}>
              <Image
                alt={lastProject.name}
                className={cls.lastProject__image}
                height={443}
                quality={100}
                src={lastProject.image}
                width={1180}
              />
            </Link>
          </div>
          <div className={cls.lastProject__characteristics}>
            <Link href={`/projects/${lastProject.slug}`}>
              <Typography style={{ fontSize: '18px', fontWeight: 600 }} variant='p'>
                {lastProject.name}
              </Typography>
            </Link>
            <Likes className={cls.likes} likes={lastProject.likes} />
          </div>
        </div>
      )}

      <footer className={classNames(cls.footer, {}, [className])}>
        <div className='container'>
          <div className={classNames(cls.footerWrapper, { [cls.footerWrapperNoProject]: !lastProject }, [])}>
            {lastProject && <div className={cls.separator} />}
            <div className={cls.bottomContent}>
              <div className={cls.socials}>
                <VkIcon />
                <TelegramIcon />
                <WhatsappIcon />
                <EmailIcon />
              </div>

              <div className={cls.services}>
                {allServices().map((service) => (
                  <div key={service.slug} className={cls.services__item}>
                    <Link href={`/search?tags=${service.tags.join('%2C')}`} className={cls.services__link}>
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
            {!lastProject && <div className={cls.separator} />}
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
