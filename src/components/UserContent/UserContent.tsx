import { Box } from '@mui/material';
import TabsMenu, { TabsVariants } from '@components/TabsMenu/TabsMenu';
import { IconButton } from '@components/ui/Buttons/Buttons';
import Edit from '@icons/Edit';
import styles from './UserContent.module.scss';
import * as React from 'react';

const UserContent = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.userContent} component="div">
      <Box className={styles.userContent__heading} component="div">
        <TabsMenu value={value} onChange={handleChange} variant={TabsVariants.AMBASSADOR_PAGE} />
        <IconButton startIcon={<Edit />} />
      </Box>
      <Box component="div" style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default UserContent;
