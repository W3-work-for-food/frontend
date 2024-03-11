import { FC } from 'react';

interface ArrowsProps {
  className?: string;
}

const Arrows: FC<ArrowsProps> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_649_6202)">
      <path
        d="M1.33337 9.33337V1.33337M1.33337 1.33337H9.33337M1.33337 1.33337L12 12"
        stroke="black"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M1.33337 14.6666V22.6666M1.33337 22.6666H9.33337M1.33337 22.6666L12 12"
        stroke="black"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M22.6666 9.33337V1.33337M22.6666 1.33337H14.6666M22.6666 1.33337L12 12"
        stroke="black"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M22.6666 14.6666V22.6666M22.6666 22.6666H14.6666M22.6666 22.6666L12 12"
        stroke="black"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_649_6202">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

Arrows.defaultProps = { className: '' };

export default Arrows;
