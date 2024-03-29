import { FC } from 'react';

interface SlashedEyeProps {
  className?: string;
}

const SlashedEye: FC<SlashedEyeProps> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.87301 14.129C4.02801 12.819 2.56801 11.115 1.74301 10.039C1.51231 9.74198 1.38708 9.37659 1.38708 9.0005C1.38708 8.62441 1.51231 8.25902 1.74301 7.962C3.23601 6.013 6.81801 2 11 2C12.876 2 14.63 2.807 16.13 3.874"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.13 6.887C12.8523 6.60467 12.5214 6.38011 12.1565 6.22629C11.7916 6.07246 11.3998 5.99241 11.0038 5.99075C10.6078 5.98909 10.2154 6.06586 9.84915 6.21662C9.48295 6.36738 9.15022 6.58916 8.87016 6.86915C8.5901 7.14915 8.36824 7.48183 8.21739 7.84799C8.06654 8.21416 7.98969 8.60657 7.99125 9.00259C7.99282 9.3986 8.07278 9.79039 8.22652 10.1554C8.38026 10.5203 8.60473 10.8512 8.887 11.129M3 17L19 1M9 15.704C9.6492 15.8972 10.3227 15.9969 11 16C15.182 16 18.764 11.987 20.257 10.038C20.4876 9.74071 20.6127 9.37509 20.6125 8.99883C20.6124 8.62256 20.4869 8.25707 20.256 7.96C19.7313 7.27549 19.1684 6.62112 18.57 6"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

SlashedEye.defaultProps = {
  className: '',
};

export default SlashedEye;
