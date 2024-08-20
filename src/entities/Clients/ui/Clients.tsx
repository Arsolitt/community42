import Image from "next/image";

import { classNames } from "@/features/helpers/className";
import { CloseIcon } from "@/shared/assets/icons/close";
import { Typography } from "@/shared/ui/Typography";

import { clients } from "@/shared/assets/clients";
import Link from "next/link";
import cls from "./Clients.module.scss";
import { AnimatedTitle } from "@/shared/ui/AnimatedTitle/AnimatedTitle";

interface ClientsProps {
  className?: string;
}

export const Clients = ({ className }: ClientsProps) => {
  return (
    <section className={classNames(cls.Clients, {}, [className])}>
      <AnimatedTitle
        header={{ first: "коллабы", second: "заказчики" }}
        customTransformX={{ positive: "95%", negative: "111%" }}
      />

      <div className={cls.sectionContent}>
        {clients.map((c) => (
          <div className={cls.client} key={c.id}>
            <Link href={c.link} target="_blank">
              <Image src={c.image} alt="image" width={108} height={108} />
              <Typography
                variant="p"
                style={{
                  fontWeight: "700",
                  fontSize: "16px",
                  textAlign: "center",
                }}
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
