import vars from '@styles/_export.module.scss';
import React, { FC } from 'react';
import { Box } from '@mui/material';

interface ContentProps {
  children: React.ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => {
  return (
    <Box
      style={{
        gridArea: 'content',
        padding: '0 32px 32px 0',
      }}
      component="div"
    >
      <Box
        style={{
          borderRadius: '16px',
          backgroundColor: vars.globalWhite,
          padding: '32px 32px 16px',
        }}
        component="div"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Content;
