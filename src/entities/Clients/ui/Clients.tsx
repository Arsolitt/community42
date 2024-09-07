import Image from "next/image";

import { classNames } from "@/features/helpers/className";
import { Typography } from "@/shared/ui/Typography";

import { clients } from "@/shared/assets/clients";
import { ArrowIcon } from "@/shared/assets/icons";
import { AnimatedTitle } from "@/shared/ui/AnimatedTitle/AnimatedTitle";
import Link from "next/link";
import cls from "./Clients.module.scss";

interface ClientsProps {
  className?: string;
}

export const Clients = ({ className }: ClientsProps) => {
  return (
    <section className={classNames(cls.Clients, {}, [className])}>
      <AnimatedTitle
        header={{ first: "коллабы", second: "заказчики" }}
        customTransformX={{ positive: "89%", negative: "104%" }}
      />

      <div className={cls.sectionContent}>
        {clients.map((c) => (
          <div className={cls.client} key={c.id}>

            <div className={cls.container}>
              <Image src={c.image} alt="image" width={108} height={108} className={cls.image} />
              <div className={cls.overlay} >
                <Link href={c.link} target="_blank" style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontWeight: "500",
                }}>
                  К проекту
                  <ArrowIcon />
                </Link>
              </div>
            </div>
            <Link href={c.link} target="_blank">
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
