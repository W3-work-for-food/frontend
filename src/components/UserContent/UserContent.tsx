import { Box } from '@mui/material';
import TabsMenu, { TabsVariants } from '@components/TabsMenu/TabsMenu';
import { IconButton } from '@components/ui/Buttons/Buttons';
import Edit from '@icons/Edit';
import * as React from 'react';
import CommonInformation from '@components/UserContent/CommonInformation/CommonInformation';
import LoyaltyProgram from '@components/UserContent/LoyaltyProgram/LoyaltyProgram';
import PostedContent from '@components/UserContent/PostedContent/PostedContent';
import styles from './UserContent.module.scss';

const UserContent = () => {
  const [value, setValue] = React.useState(0);
  const [isEditing, setIsEditing] = React.useState(false); // Добавлено состояние для режима редактирования

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  let UserData;
  if (value === 0) {
    UserData = <CommonInformation />;
  } else if (value === 1) {
    UserData = <PostedContent isEditing={isEditing} />;
  } else {
    UserData = <LoyaltyProgram />;
  }

  return (
    <Box className={styles.userContent} component="div">
      <Box className={styles.userContent__heading} component="div">
        <TabsMenu
          value={value}
          onChange={handleChange}
          variant={TabsVariants.AMBASSADOR_PAGE}
        />
        <IconButton startIcon={<Edit />} onClick={toggleEdit} />
      </Box>
      {UserData}
    </Box>
  );
};

export default UserContent;
