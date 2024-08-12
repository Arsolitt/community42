import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/shared/ui/Typography";
import { RouterLink } from "@/shared/ui/RouterLink";

import { team } from "@/shared/assets/team";
import cls from "../Team.module.scss";

export const TeamRightBlock = () => (
  <div className={cls.rightBlock}>
    {team.map((t) => (
      <div className={cls.persona} key={t.id}>
        <Image
          src={t.image}
          alt={`Фотография сотрудника команды ${t.name}`}
          width={154}
          height={154}
          style={{ borderRadius: "12px" }}
        />
        <Link href={`/team/${t.link}`}>
          <div className={cls.personaInfo}>
            <RouterLink />
            <div className={cls.persona__name}>
              <Typography
                variant="p"
                style={{ fontWeight: "600", fontSize: "18px" }}
              >
                {t.name}
              </Typography>
              <Typography
                variant="span"
                style={{ fontWeight: "500", fontSize: "14px" }}
              >
                {t.position}
              </Typography>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
);
