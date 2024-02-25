import { FC } from 'react';

interface CloseProps {
  className?: string;
}

const Close: FC<CloseProps> = ({ className }) => (
  <svg
    className={className}
    width="21"
    height="22"
    viewBox="0 0 21 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.8 0.6a2 2 0 00-2 2V19.8a2 2 0 002 2H13.8a1 1 0 100-2H1.8V2.2H13.8a1 1 0 100-2H1.8zM17.166 6.834a1 1 0 00-1.414 0 1 1 0 000 1.414L18.269 10.2H7.4a1 1 0 100 2h10.869l-2.517 2.517a1 1 0 101.414 1.414l4.6-4.6a1 1 0 000-1.414l-4.6-4.6z"
      fill="black"
    />
  </svg>
);

Close.defaultProps = {
  className: '',
};

export default Close;
