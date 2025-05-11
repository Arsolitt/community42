// Шаблон текста “основной”
import { classNames } from '@/features/helpers/className';

import cls from './TextBlock.module.css';

interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const TextBlock = ({ className, children }: TextBlockProps) => {
  return (
    <div className={classNames(cls.textBlock, {}, [className])}>
      {children}
    </div>
  );
};
