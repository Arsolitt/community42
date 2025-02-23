interface Props {
  className?: string;
}

export const BreadcrumbsArrow = ({ className }: Props) => (
  <svg
    className={className}
    fill='none'
    height='16'
    width='8'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 16'
  >
    <path d='M1 14.5L7 8L1 1.5' stroke='white' strokeLinecap='square' />
  </svg>
);
