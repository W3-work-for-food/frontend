import { Box } from '@mui/material';
import CommonInformation from '@components/UserContent/CommonInformation/CommonInformation';
import LoyaltyProgram from '@components/UserContent/LoyaltyProgram/LoyaltyProgram';
import PostedContent from '@components/UserContent/PostedContent/PostedContent';
import React, { FC } from 'react';
import TabsMenu, { TabsVariants } from '@components/TabsMenu/TabsMenu';
import { IconButton } from '@components/ui/Buttons/Buttons';
import { IAmbassador } from '@utils/types/ambassadorTypes';
import Edit from '@/assets/icons/Edit';
import styles from './UserContent.module.scss';

interface UserContentProps {
  value: number;
  onChange: (_event: React.SyntheticEvent, newValue: number) => void;
  ambassador: IAmbassador;
}

const UserContent: FC<UserContentProps> = ({ value, onChange, ambassador }) => {
  let UserData;
  switch (value) {
    case 0:
      UserData = <CommonInformation />;
      break;
    case 1:
      UserData = <PostedContent />;
      break;
    case 2:
      UserData = <LoyaltyProgram ambassador={ambassador} />;
      break;
    default:
      UserData = <CommonInformation />;
      break;
  }

  return (
    <Box className={styles.userContent} component="div">
      <Box className={styles.userContent__heading} component="div">
        <TabsMenu
          value={value}
          onChange={onChange}
          variant={TabsVariants.AMBASSADOR_PAGE}
        />
        {value !== 2 && <IconButton startIcon={<Edit />} />}
      </Box>
      {UserData}
    </Box>
  );
};

export default UserContent;
