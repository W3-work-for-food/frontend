import React from 'react';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import vars from '@styles/_export.module.scss';
import style from './CustomLink.module.scss';

interface CustomLinkProps {
  url: string;
  children: string;
  size: string;
}

const StyledLink = styled(Link)(() => ({
  '&': {
    color: `${vars.subtitlesColor}`,
    '&:hover': {
      color: `${vars.mainTextColor}`,
    },
  },
}));

const CustomLink: React.FC<CustomLinkProps> = ({ url, children, size }) => {
  return (
    <Box>
      <StyledLink
        className={size === 'sm' ? style.link__text_sm : style.link__text_m}
        href={url}
      >
        {children}
      </StyledLink>
    </Box>
  );
};

export default CustomLink;
