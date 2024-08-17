import Image from "next/image";

import { classNames } from "@/features/helpers/className";
import { CloseIcon } from "@/shared/assets/icons/close";
import { Typography } from "@/shared/ui/Typography";

import { clients } from "@/shared/assets/clients";
import Link from "next/link";
import cls from "./Clients.module.scss";

interface ClientsProps {
  className?: string;
}

export const Clients = ({ className }: ClientsProps) => {
  return (
    <section className={classNames(cls.Clients, {}, [className])}>
      <div className={cls.sectionTitle}>
        <Typography variant="h2">коллабы</Typography>
        <CloseIcon />
        <Typography variant="h2">заказчики</Typography>
      </div>

      <div className={cls.sectionContent}>
        {clients.map((c) => (
          <div className={cls.client} key={c.id}>
            <Link href={c.link} target="_blank">
              <Image src={c.image} alt="image" width={108} height={108} />
              <Typography
                variant="p"
                style={{ fontWeight: "700", fontSize: "16px" }}
              >
                {c.name}
              </Typography>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
