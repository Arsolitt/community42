import Image from "next/image";
import Link from "next/link";

import { ArrowButton } from "@/components/ArrowButton";
import { AnimatedTitle } from "@/components/AnimatedTitle/AnimatedTitle";
import { Typography } from "@/components/Typography";
import { classNames } from "@features/helpers/className";
import { allClients } from "@storage/clients";

import cls from "./Clients.module.css";

interface ClientsProps {
  className?: string;
}

export const Clients = ({ className }: ClientsProps) => {
  const clients = allClients().slice(0, 10);
  const firstGroup = clients.slice(0, 5);
  const secondGroup = clients.slice(5, 10);

  return (
    <section className={classNames(cls.Clients, {}, [className])}>
      <AnimatedTitle
        header={{ first: "коллабы", second: "клиенты" }}
        customTransformX={{ positive: "89%", negative: "104%" }}
        titleStyle={{ fontSize: "111px", lineHeight: "100%" }}
      />

      <div className={cls.sectionContent}>
        <div className={cls.clientGroup}>
          {firstGroup.map((c) => (
            <div key={c.slug} className={cls.client}>
              <div className={cls.container}>
                <Image alt="image" className={cls.image} height={134} src={c.image} width={134} />
                <div className={cls.overlay}>
                  <Link className={cls.overlayLink} href={`/search?q=${c.name}`} target="_blank">
                    Посмотреть проекты
                  </Link>
                  <ArrowButton className={cls.arrowButton} />
                </div>
              </div>
              <Link href={`/search?q=${c.name}`} target="_blank">
                <Typography
                  style={{
                    fontWeight: "700",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                  variant="span"
                >
                  {c.name}
                </Typography>
              </Link>
            </div>
          ))}
        </div>
        <div className={cls.clientGroup}>
          {secondGroup.map((c) => (
            <div key={c.slug} className={cls.client}>
              <div className={cls.container}>
                <Image alt="image" className={cls.image} height={134} src={c.image} width={134} />
                <div className={cls.overlay}>
                  <Link className={cls.overlayLink} href={`/search?q=${c.name}`} target="_blank">
                    Посмотреть проекты
                  </Link>
                  <ArrowButton className={cls.arrowButton} />
                </div>
              </div>
              <Link href={`/search?q=${c.name}`} target="_blank">
                <Typography
                  style={{
                    fontWeight: "700",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                  variant="span"
                >
                  {c.name}
                </Typography>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
