import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import vars from '@styles/_export.module.scss';

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
