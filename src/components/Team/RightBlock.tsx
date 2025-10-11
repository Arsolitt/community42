import Link from "next/link";

import { ImageSet } from "@/components/ImageSet/ImageSet";
import { RouterLink } from "@/components/RouterLink";
import { Typography } from "@/components/Typography";
import { TEAM_PATH } from "@/core/config/paths";
import { allTeamMembers } from "@storage/team";

import cls from "./Team.module.css";

export const TeamRightBlock = () => (
  <div className={cls.rightBlock}>
    {allTeamMembers().map((t) => (
      <div key={t.slug} className={cls.persona}>
        <Link href={`${TEAM_PATH}/${t.slug}`} className={cls.persona__image}>
          <ImageSet images={t.images} />
        </Link>

        <div className={cls.personaInfo}>
          <div className={cls.persona__name}>
            <Link href={`${TEAM_PATH}/${t.slug}`}>
              <Typography style={{ fontWeight: "600", fontSize: "18px" }} variant='p'>
                {t.name}
              </Typography>
            </Link>
            <RouterLink />
          </div>
          <div className={cls.persona__position}>
            <Typography
              style={{
                fontWeight: "500",
                fontSize: "14px",
                textAlign: "left"
              }}
              variant='span'
            >
              {t.position}
            </Typography>
          </div>
        </div>
      </div>
    ))}
  </div>
);
