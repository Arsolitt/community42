import Image from "next/image";

import { classNames } from "@/features/helpers/className";
import { ArrowIcon } from "@/shared/assets/icons/arrow";
import { services } from "@/shared/assets/services";
import Link from "next/link";
import cls from "./ServicesList.module.scss";

interface ServicesListProps {
  className?: string;
}

export const ServicesList = ({ className }: ServicesListProps) => {
  return (
    <div className={classNames(cls.ServicesList, {}, [className])}>
      {services.map((s) => (
        <div key={s.id} className={cls.item}>
          <Image
            src={s.image}
            alt="image"
            className={cls.item__image}
            width={280}
            height={154}
          />

          {s.isNew && <div className={cls.item__new}>Новое</div>}

          <Link href={s.link}>
            <div className={cls.itemDescription}>
              <h4>{s.text}</h4>
              <div className={cls.item__link}>
                <ArrowIcon />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
