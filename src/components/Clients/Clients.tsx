import Image from "next/image";
import Link from "next/link";

import { AnimatedTitle } from "@/components/AnimatedTitle/AnimatedTitle";
import { Typography } from "@/components/Typography";
import { classNames } from "@features/helpers/className";
import { ArrowIcon } from "@shared/assets/icons";
import { allClients } from "@storage/clients";

import cls from "./Clients.module.css";

interface ClientsProps {
  className?: string;
}

export const Clients = ({ className }: ClientsProps) => {
  return (
    <section className={classNames(cls.Clients, {}, [className])}>
      <AnimatedTitle
        header={{ first: "коллабы", second: "клиенты" }}
        customTransformX={{ positive: "89%", negative: "104%" }}
        titleStyle={{ fontSize: "111px", lineHeight: "100%" }}
      />

      <div className={cls.sectionContent}>
        {allClients().map((c) => (
          <div key={c.slug} className={cls.client}>
            <div className={cls.container}>
              <Image alt="image" className={cls.image} height={108} src={c.image} width={108} />
              <div className={cls.overlay}>
                <Link
                  href={`/search?q=${c.name}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontWeight: "500",
                  }}
                  target="_blank"
                >
                  К проекту
                  <ArrowIcon />
                </Link>
              </div>
            </div>
            <Link href={`/search?q=${c.name}`} target="_blank">
              <Typography
                style={{
                  fontWeight: "700",
                  fontSize: "16px",
                  textAlign: "center",
                }}
                variant="p"
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
