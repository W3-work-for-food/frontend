import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import vars from '@styles/_export.module.scss';

export const PrimaryButton = styled(Button)({
  color: `${vars.mainTextColor}`,
  fontFamily: [vars.mainFont],
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: `${vars.fsMain}`,
  lineHeight: `${vars.fsLineHeight}`,
  padding: '10px 32px',
  borderRadius: `${vars.borderRadius}`,
  backgroundColor: `${vars.defaultBtnColor}`,
  letterSpacing: 0,
  '&:hover': {
    backgroundColor: `${vars.defaultHoverBtnColor}`,
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: `${vars.defaultOnClickBtnColor}`,
  },
  '&:focus': {
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 2px',
  },
  '&.Mui-disabled': {
    backgroundColor: `${vars.defaultDisabledBgBtnColor}`,
    borderColor: `${vars.defaultDisabledBgBtnColor}`,
    color: `${vars.defaultDisabledBtnColor}`,
  },
  '& .MuiButton-startIcon': {
    marginRight: '4px',
  },
});

export const SecondaryButton = styled(Button)({
  fontFamily: [vars.mainFont],
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: `${vars.fsMain}`,
  lineHeight: `${vars.fsLineHeight}`,
  letterSpacing: 0,
  padding: '10px 32px',
  color: `${vars.mainTextColor}`,
  borderRadius: `${vars.borderRadius}`,
  backgroundColor: `${vars.secondBtnColor}`,
  border: `1px solid ${vars.secondBtnColor}`,
  '&:hover': {
    backgroundColor: `${vars.secondHoverBtnColor}`,
    borderColor: `${vars.secondHoverBtnBorderColor}`,
    color: `${vars.mainTextColor}`,
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: `${vars.secondOnClickBtnColor}`,
  },
  '&:focus': {
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 2px',
  },
  '&.Mui-disabled': {
    backgroundColor: `${vars.secondDisabledBgBtnColor}`,
    borderColor: `${vars.secondDisabledBgBtnColor}`,
    color: `${vars.secondDisabledBtnColor}`,
  },
});

export const IconButton = styled(Button)({
  fontFamily: [vars.mainFont],
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: `${vars.fsMain}`,
  lineHeight: `${vars.fsLineHeight}`,
  letterSpacing: 0,
  padding: '0px',
  height: '40px',
  minWidth: '40px',
  width: '40px',
  color: `${vars.mainTextColor}`,
  borderRadius: `${vars.borderIconRadius}`,
  backgroundColor: `transparent`,
  border: `1px solid transparent`,
  '&:hover': {
    backgroundColor: `#F9FAFB`,
    borderColor: `#F9FAFB`,
    color: `${vars.mainTextColor}`,
    boxShadow: 'none',
  },
  '&.active': {
    boxShadow: 'none',
    backgroundColor: `#E4E7ED`,
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: `#E4E7ED`,
  },
  '&:focus': {
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 2px',
  },
  '&.Mui-disabled': {
    backgroundColor: `transparent`,
    borderColor: `transparent`,
    color: `#80818F`,
  },

  '& .MuiButton-startIcon': {
    marginLeft: '0px',
    marginRight: '0px',
  },
  '& .MuiButton-startIcon>*:nth-of-type(1)': {
    fontSize: '18px',
  },
  '&.Mui-disabled .MuiButton-startIcon>*:nth-of-type(1) path': {
    fill: `#EDEDED`,
  },
});
