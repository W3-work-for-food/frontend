import vars from '@styles/_export.module.scss';
import React, { FC } from 'react';
import { Box } from '@mui/material';

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const Content: FC<ContentProps> = ({ children, className }) => {
  return (
    <Box
      style={{
        gridArea: 'content',
        margin: '0 32px 32px 0',
        borderRadius: '16px',
        backgroundColor: vars.globalWhite,
        boxShadow: '1px 1px 2px 0px #CBD5F1',
      }}
      className={className}
      component="div"
    >
      {children}
    </Box>
  );
};

Content.defaultProps = {
  className: '',
};

export default Content;
