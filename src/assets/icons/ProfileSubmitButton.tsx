import { FC } from 'react';

interface ButtonProps {
  className?: string;
}
const ProfileSubmitButton: FC<ButtonProps> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="8" fill="#87CC9E" />
    <path
      d="M10.524 14.2794L7.9113 11.6667C7.78628 11.5417 7.61674 11.4715 7.43996 11.4715C7.26319 11.4715 7.09365 11.5417 6.96863 11.6667C6.84365 11.7917 6.77344 11.9613 6.77344 12.1381C6.77344 12.3148 6.84365 12.4844 6.96863 12.6094L9.5813 15.2221C9.70511 15.3459 9.85212 15.4442 10.0139 15.5112C10.1757 15.5783 10.3492 15.6128 10.5243 15.6128C10.6994 15.6128 10.8729 15.5783 11.0347 15.5112C11.1965 15.4442 11.3435 15.3459 11.4673 15.2221L17.6353 9.05406C17.7603 8.92904 17.8305 8.7595 17.8305 8.58272C17.8305 8.40595 17.7603 8.23641 17.6353 8.11139C17.5103 7.98641 17.3407 7.9162 17.164 7.9162C16.9872 7.9162 16.8176 7.98641 16.6926 8.11139L10.524 14.2794Z"
      fill="#F9FAFB"
    />
  </svg>
);

ProfileSubmitButton.defaultProps = {
  className: '',
};

export default ProfileSubmitButton;
