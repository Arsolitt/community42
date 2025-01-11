import Image from 'next/image';
import Link from 'next/link';

import { classNames } from '@/features/helpers/className';
import { clients } from '@/shared/assets/clients';
import { ArrowIcon } from '@/shared/assets/icons';
import { AnimatedTitle } from '@/shared/ui/AnimatedTitle/AnimatedTitle';
import { Typography } from '@/shared/ui/Typography';

import cls from './Clients.module.scss';

interface ClientsProps {
  className?: string;
}

export const Clients = ({ className }: ClientsProps) => {
  return (
    <section className={classNames(cls.Clients, {}, [className])}>
      <AnimatedTitle
        header={{ first: 'коллабы', second: 'заказчики' }}
        customTransformX={{ positive: '89%', negative: '104%' }}
      />

      <div className={cls.sectionContent}>
        {clients.map((c) => (
          <div key={c.id} className={cls.client}>

            <div className={cls.container}>
              <Image alt='image' className={cls.image} height={108} src={c.image} width={108} />
              <div className={cls.overlay}>
                <Link
                  href={c.link}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontWeight: '500'
                  }}
                  target='_blank'
                >
                  К проекту
                  <ArrowIcon />
                </Link>
              </div>
            </div>
            <Link href={c.link} target='_blank'>
              <Typography
                style={{
                  fontWeight: '700',
                  fontSize: '16px',
                  textAlign: 'center'
                }}
                variant='p'
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
