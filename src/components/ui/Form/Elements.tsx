import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container, FormHelperText, InputLabel } from '@mui/material';
import vars from '@styles/_export.module.scss';

export const FormContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 0,
});

export const DefaultLabel = styled(InputLabel)({
  fontSize: vars.fsCaption,
  fontWeight: vars.SemiBold,
  lineHeight: '16px',
  fontFamily: [vars.mainFont],
  marginBottom: 4,
});

export const SuccessLabel = styled(FormHelperText)({
  fontSize: vars.fsSubTitle,
  lineHeight: vars.fsSubTitle,
  padding: '0 6px',
  fontFamily: [vars.mainFont],
  color: vars.successColor,
  textAlign: 'center',
});

export const ErrorLabel = styled(FormHelperText)({
  fontSize: vars.fsSecondMain,
  lineHeight: '20px',
  padding: '0 6px',
  fontFamily: [vars.mainFont],
  color: vars.errorsColor,
  letterSpacing: 0,
  textAlign: 'center',
});

export const ErrorMessage = styled(FormHelperText)({
  fontSize: vars.fsSecondCaption,
  fontFamily: [vars.mainFont],
  color: vars.errorsColor,
  letterSpacing: 0,
  lineHeight: '12px',
  '&.Mui-error': {
    color: vars.errorsColor,
  },
});

export const DefaultInput = styled(InputBase)(({ theme, error }) => ({
  '& .MuiInputBase-input': {
    fontFamily: [vars.mainFont],
    borderRadius: `${vars.borderRadius}`,
    backgroundColor: vars.defaultInputBgColor,
    border: '1px solid',
    borderColor: error ? vars.errorsColor : vars.defaultInputBorderColor,
    placeholdercolor: vars.defaultFiledColor,
    color: vars.mainTextColor,
    fontSize: vars.fsSecondMain,
    minHeight: '40px',
    padding: '12px 10px',
    boxSizing: 'border-box',
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    '&:hover': {
      borderColor: vars.defaultInputHoverBorderColor,
    },
    '&:focus': {
      borderColor: error
        ? vars.errorsColor
        : vars.defaultInputFocusedBorderColor,
    },
  },
}));

export const DefaultOutlinedInput = styled(InputBase)(({ theme, error }) => ({
  borderRadius: `${vars.borderRadius}`,
  backgroundColor: vars.defaultInputBgColor,
  border: '1px solid',
  paddingRight: '14px',
  borderColor: error ? vars.errorsColor : vars.defaultInputBorderColor,
  '&:hover': {
    borderColor: vars.defaultInputHoverBorderColor,
  },
  '&.Mui-focused': {
    borderColor: error ? vars.errorsColor : vars.defaultInputFocusedBorderColor,
  },
  '& .MuiInputBase-input': {
    borderRadius: `${vars.borderRadius}`,
    fontFamily: [vars.mainFont],
    placeholdercolor: vars.defaultFiledColor,
    color: vars.mainTextColor,
    fontSize: vars.fsSecondMain,
    minHeight: '40px',
    padding: '12px 10px',
    boxSizing: 'border-box',
    transition: theme.transitions.create(['background-color', 'box-shadow']),
  },
}));
