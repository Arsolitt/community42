import Link from 'next/link';

import { classNames } from '@/features/helpers/className';
import { services } from '@/shared/assets/services';
import { RouterLink } from '@/shared/ui/RouterLink';
import { Typography } from '@/shared/ui/Typography';

import { ImageSet } from '../../../../shared/ui/ImageSet/ImageSet';

import cls from './ServicesList.module.scss';

interface ServicesListProps {
  className?: string;
}

export const ServicesList = ({ className }: ServicesListProps) => {
  return (
    <div className={classNames(cls.ServicesList, {}, [className])}>
      {services.map((s) => (
        <div key={s.slug} className={cls.item}>
          <Link href={s.link}>
            <ImageSet className={cls.item__image} height={154} images={s.images} width={280} />
          </Link>
          {s.isNew && <div className={cls.item__new}>Новое</div>}
          <Link href={s.link}>
            <div className={cls.itemDescription}>
              <Typography style={{ fontWeight: '600', lineHeight: '120%' }} variant='p'>
                {s.text}
              </Typography>
              <RouterLink />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
