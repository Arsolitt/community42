import Link from 'next/link';
import React from 'react';

import { BreadcrumbsArrow } from '@/shared/assets/icons/breadcrumbsArrow';

import cls from './Breadcrumbs.module.scss';

interface BreadcrumbLink {
  href: string;
  text: string;
}

interface BreadcrumbsProps {
  links: BreadcrumbLink[];
}

export const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
  return (
    <div className={cls.Breadcrumbs}>
      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          <Link href={link.href} key={link.href}>
            {link.text}
          </Link>
          {index < links.length - 1 && (
            <BreadcrumbsArrow className='mr-3' />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
