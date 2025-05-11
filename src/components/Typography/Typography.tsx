import { classNames } from '@/features/helpers/className';

import cls from './Typography.module.scss';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const Typography = (props: TypographyProps) => {
  const { variant, children, className, style } = props;
  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag className={classNames(cls.typography, {}, [className, cls[variant]])} style={style}>
      {children}
    </Tag>
  );
};
