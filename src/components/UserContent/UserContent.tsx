import { Box } from '@mui/material';
import TabsMenu, { TabsVariants } from '@components/TabsMenu/TabsMenu';
import { IconButton } from '@components/ui/Buttons/Buttons';
import Edit from '@icons/Edit';
import styles from './UserContent.module.scss';

const UserContent = () => {
  return (
    <Box className={styles.userContent} component="div">
      <Box className={styles.userContent__heading} component="div">
        <TabsMenu variant={TabsVariants.AMBASSADOR_PAGE} />
        <IconButton startIcon={<Edit />} />
      </Box>
      <Box component="div" style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default UserContent;
