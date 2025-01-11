interface Props {
  className?: string;
}

export const ArrowIcon = (props: Props) => (
  <svg
    className={props.className}
    fill='none'
    height='9'
    width='18'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 9'
  >
    <path
      d='M1 4.5L17 4.5M17 4.5L12.6418 1M17 4.5L12.6418 8'
      stroke='url(#paint0_linear_1682_1586)'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient
        gradientUnits='userSpaceOnUse'
        id='paint0_linear_1682_1586'
        x1='19.3866'
        x2='-1.47105'
        y1='5.59008'
        y2='5.11257'
      >
        <stop offset='0.0001' stopColor='#FF66D0' />
        <stop offset='0.452486' stopColor='#9F9DFF' />
        <stop offset='1' stopColor='white' />
      </linearGradient>
    </defs>
  </svg>
);
