import Image from "next/image";

import { classNames } from "@/features/helpers/className";
import cls from "./Footer.module.scss";
import { Typography } from "@/shared/ui/Typography";
import { lastProject } from "@/shared/assets/lastProject";
import { Likes } from "@/shared/ui/Likes";
import {
  EmailIcon,
  TelegramIcon,
  VkIcon,
  WhatsappIcon,
} from "@/shared/assets/icons";
import { services } from "@/shared/assets/services";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={classNames(cls.footer, {}, [className])}>
      <div className="container">
        <div className={classNames(cls.footerWrapper, {}, [])}>
          <div className={cls.lastProject}>
            <Typography variant="h6">Оцените нашу последнюю работу</Typography>
            <Image
              alt={lastProject.image.alternativeText}
              src={lastProject.image.src}
              width={1180}
              height={440}
              quality={100}
              className={cls.lastProject__image}
            />
            <div className={cls.lastProject__characteristics}>
              <Typography
                variant="p"
                style={{ fontSize: "18px", fontWeight: 600 }}
              >
                {lastProject.name}
              </Typography>
              <Likes likes={lastProject.likes} />
            </div>
          </div>

          <div className={cls.separator} />

          <div className={cls.bottomContent}>
            <div className={cls.socials}>
              <VkIcon />
              <TelegramIcon />
              <WhatsappIcon />
              <EmailIcon />
            </div>

            <div className={cls.services}>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.link}
                  className={cls.services__link}
                >
                  {service.text}
                </Link>
              ))}
            </div>

            <div className={cls.description}>
              <Typography variant="p" className={cls.descriptionTitle}>
                г. Кемерово
              </Typography>
              <Typography variant="span" className={cls.descriptionText}>
                съёмка видео и фото происходит в основном в этом городе
              </Typography>
            </div>
          </div>
          <div className={cls.copyright}>
            <Typography variant="p">© 2024. Все права защищены</Typography>
            <Typography variant="p">
              Заходите к нам чаще за новой порцией креативчика ;)
            </Typography>
            <Typography variant="p">творческая команда Комьюнити</Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
