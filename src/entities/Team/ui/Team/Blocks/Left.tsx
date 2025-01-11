import { Typography } from '@/shared/ui/Typography';

import cls from '../Team.module.scss';

export const TeamLeftBlock = () => (
  <div className={cls.leftBlock}>
    <Typography style={{ fontWeight: '500' }} variant='span'>
      Вы даёте нам задачу — а мы собираем под неё уникальную команду креативных специалистов. <br />
      <br />
      Все параметры работы подбираются под ваш запрос: время, сложность и стоимость.
    </Typography>

    <Typography variant='h6'>Но!</Typography>

    <Typography style={{ fontWeight: '500' }} variant='span'>
      Качество креативного продукта остается всегда на высоте — ведь мы в Комьюнити любим мутить стилёк ;)
      <br />
      <br />С нами можно побщаться <br />в мессенджерах и в программах удаленного доступа (Skype, Discord, Zoom и
      другие...)
    </Typography>

    <Typography variant='h6'>Также</Typography>
    <Typography style={{ fontWeight: '500' }} variant='span'>
      Для нас знаком опыт коллабораций с другими специалистами и командами, находящимися даже в разных городах
    </Typography>
  </div>
);
