import Link from "next/link";

import { Typography } from "@/shared/ui/Typography";

import { team } from "@/shared/assets/team";
import { ImageSet } from "@/shared/ui/ImageSet/ImageSet";
import { RouterLink } from "@/shared/ui/RouterLink";
import cls from "../Team.module.scss";

export const TeamRightBlock = () => (
  <div className={cls.rightBlock}>
    {team.map((t) => (
      <div className={cls.persona} key={t.id}>
        <Link href={`/team/${t.slug}`}>
          <ImageSet images={t.images} className={cls.persona__image} width={154} height={154} />
        </Link>

        <div className={cls.personaInfo}>
          <div className={cls.persona__name}>
            <Link href={`/team/${t.slug}`}>
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
