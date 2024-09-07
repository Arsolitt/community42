
import { classNames } from "@/features/helpers/className";
import { services } from "@/shared/assets/services";
import { RouterLink } from "@/shared/ui/RouterLink";
import { Typography } from "@/shared/ui/Typography";
import Link from "next/link";
import { ImageSet } from '../../../../shared/ui/ImageSet/ImageSet';
import cls from "./ServicesList.module.scss";

interface ServicesListProps {
  className?: string;
}


export const ServicesList = ({ className }: ServicesListProps) => {

  return (
    <div className={classNames(cls.ServicesList, {}, [className])}>
      {services.map((s) => (
        <div key={s.id} className={cls.item}>
          <Link href={s.link}>
            <ImageSet images={s.images} className={cls.item__image} width={280} height={154} />
          </Link>
          {s.isNew && <div className={cls.item__new}>Новое</div>}
          <Link href={s.link}>
            <div className={cls.itemDescription}>
              <Typography
                variant="p"
                style={{ fontWeight: "600", lineHeight: "120%" }}
              >
                {s.text}
              </Typography>
              <RouterLink />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
