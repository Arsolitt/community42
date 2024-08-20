import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/shared/ui/Typography";

import { team } from "@/shared/assets/team";
import { RouterLink } from "@/shared/ui/RouterLink";
import cls from "../Team.module.scss";

export const TeamRightBlock = () => (
  <div className={cls.rightBlock}>
    {team.map((t) => (
      <div className={cls.persona} key={t.id}>
        <Link href={`/team/${t.link}`}>
          <Image
            src={t.image}
            alt={`Фотография сотрудника команды ${t.name}`}
            width={154}
            height={154}
            style={{ borderRadius: "12px" }}
          />
        </Link>

        <div className={cls.personaInfo}>
          <div className={cls.persona__name}>
            <Link href={`/team/${t.link}`}>
              <Typography
                variant="p"
                style={{ fontWeight: "600", fontSize: "18px" }}
              >
                {t.name}
              </Typography>
            </Link>
            <RouterLink />
          </div>
          <div className={cls.persona__position}>

            <Typography
              variant="span"
              style={{
                fontWeight: "500",
                fontSize: "14px",
                textAlign: "left",
              }}
            >
              {t.position}
            </Typography>
          </div>

        </div>

      </div>
    ))}
  </div>
);
