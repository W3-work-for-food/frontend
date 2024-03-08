import { styled } from '@mui/material/styles';
import {
  AppBar,
  Container,
  FormHelperText,
  InputLabel,
  Typography,
} from '@mui/material';
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

export const DefaultTypography = styled(Typography)(() => ({
  '&.MuiTypography-root': {
    fontFamily: [vars.mainFont],
  },
}));

export const CustomHeaderBar = styled(AppBar)(() => ({
  '&.MuiAppBar-root': {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position: 'relative',
  },
}));
