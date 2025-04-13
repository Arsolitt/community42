import Link from 'next/link';

import { TEAM_PATH } from '@/core/config/paths';
import { team } from '@/shared/assets/team';
import { ImageSet } from '@/shared/ui/ImageSet/ImageSet';
import { RouterLink } from '@/shared/ui/RouterLink';
import { Typography } from '@/shared/ui/Typography';

import cls from '../Team.module.scss';

export const TeamRightBlock = () => (
  <div className={cls.rightBlock}>
    {team.map((t) => (
      <div key={t.slug} className={cls.persona}>
        <Link href={`${TEAM_PATH}/${t.slug}`} className={cls.persona__image}>
          <ImageSet images={t.images} />
        </Link>

        <div className={cls.personaInfo}>
          <div className={cls.persona__name}>
            <Link href={`${TEAM_PATH}/${t.slug}`}>
              <Typography style={{ fontWeight: '600', fontSize: '18px' }} variant='p'>
                {t.name}
              </Typography>
            </Link>
            <RouterLink />
          </div>
          <div className={cls.persona__position}>
            <Typography
              style={{
                fontWeight: '500',
                fontSize: '14px',
                textAlign: 'left'
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
