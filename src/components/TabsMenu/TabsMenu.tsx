import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import vars from '@styles/_export.module.scss';
import style from './TabsMenu.module.scss';

export enum TabsVariants {
  NOTIFICATIONS = 'Notifications',
  AMBASSADOR_PAGE = 'AmbassadorPage',
}

const StyledTab = styled(Tab)(() => ({
  '&': {
    color: `${vars.subtitlesColor}`,
    textTransform: 'none',
    letterSpacing: '-0.1px',
    padding: '0',
  },
  '&:focus': {
    color: `${vars.mainTextColor}`,
  },
  '&.Mui-selected': {
    color: `${vars.mainTextColor}`,
  },
}));

const CustomTabs = styled(Tabs)(() => ({
  '.MuiTabs-flexContainer': {
    gap: '24px',
  },
  '&.MuiTabs-root': {
    minHeight: '32px',
  },
  '& .MuiButtonBase-root': {
    justifyContent: 'space-between',
    minHeight: '32px',
  },
}));

interface TabsMenuProps {
  variant: TabsVariants.NOTIFICATIONS | TabsVariants.AMBASSADOR_PAGE;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

enum NotificationsTabs {
  Read = 'Прочитанные',
  Unread = 'Непрочитанные',
}

enum AmbassadorPageTabs {
  GeneralInformation = 'Общая информация',
  PostedContent = 'Размещенный контент',
  LoyaltyProgram = 'Программа лояльности',
}

const TabsMenu: React.FC<TabsMenuProps> = ({ variant, value, onChange }) => {
  let tabLabels: string[] = [];

  if (variant === TabsVariants.NOTIFICATIONS) {
    tabLabels = [NotificationsTabs.Read, NotificationsTabs.Unread];
  } else if (variant === TabsVariants.AMBASSADOR_PAGE) {
    tabLabels = [
      AmbassadorPageTabs.GeneralInformation,
      AmbassadorPageTabs.PostedContent,
      AmbassadorPageTabs.LoyaltyProgram,
    ];
  }

  return (
    <Box style={{ height: '32px' }}>
      <CustomTabs
        onChange={onChange}
        value={value}
        aria-label="Menu tabs"
        TabIndicatorProps={{
          style: { background: `${vars.defaultBtnColor}`, height: '4px' },
        }}
      >
        {tabLabels.map((label: string) => (
          <StyledTab
            key={label}
            className={style.tab__text}
            label={label}
            disableRipple
          />
        ))}
      </CustomTabs>
    </Box>
  );
};

export default TabsMenu;
