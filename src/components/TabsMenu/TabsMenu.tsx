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

interface TabsMenuProps {
  variant: TabsVariants.NOTIFICATIONS | TabsVariants.AMBASSADOR_PAGE;
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

const TabsMenu: React.FC<TabsMenuProps> = ({ variant }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabLabels =
    variant === TabsVariants.NOTIFICATIONS
      ? ['Прочитанные', 'Непрочитанные']
      : ['Общая информация', 'Размещенный контент', 'Программа лояльности'];

  return (
    <Box style={{ height: '32px' }}>
      <CustomTabs
        onChange={handleChange}
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
