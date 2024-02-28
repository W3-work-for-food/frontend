import { styled } from '@mui/material/styles';
import vars from '@styles/_export.module.scss';

import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';

const BpIcon = styled('span')(() => ({
  borderRadius: 8,
  width: `${vars.sizeIcon}`,
  height: `${vars.sizeIcon}`,
  boxShadow: `0 0 0 1px ${vars.defaultCheckboxColor}`,
  backgroundColor: '#ffffff',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(0, 0, 0, 0.05)',
  },
  'input:hover ~ &': {
    backgroundColor: '#ffffff',
    boxShadow: `0 0 0 1px ${vars.defaultHoverCheckboxColor}`,
  },
  'input:disabled ~ &': {
    boxShadow: `0 0 0 1px ${vars.defaultDisabledBorderCheckboxColor}`,
    background: `${vars.defaultDisabledCheckboxColor}`,
  },
  'input:disabled ~ &::before': {
    display: 'block',
    width: `${vars.sizeIcon}`,
    height: `${vars.sizeIcon}`,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%2380818F'/%3E%3C/svg%3E\")",
    content: '""',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: `${vars.defaultHoverCheckboxColor}`,
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  boxShadow: `0 0 0 1px ${vars.defaultHoverCheckboxColor}`,
  '&::before': {
    display: 'block',
    width: `${vars.sizeIcon}`,
    height: `${vars.sizeIcon}`,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%231A1A1A'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: `${vars.defaultHoverCheckboxColor}`,
    boxShadow: `0 0 0 1px ${vars.defaultHoverCheckboxColor}`,
  },
});

// eslint-disable-next-line import/prefer-default-export
export const MainCheckbox = (props: CheckboxProps): JSX.Element => {
  return (
    <Checkbox
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
};
