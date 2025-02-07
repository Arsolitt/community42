import Link from 'next/link';

interface BreadcrumbLink {
  href: string;
  text: string;
}
interface BreadcrumbsProps {
  links: BreadcrumbLink[];
}

export const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
  return (
    <div>
      {links.map((link) => (
        <Link href={link.href} key={link.href}>
          {link.text}
        </Link>
      ))}
    </div>
  );
};
