import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import vars from '@styles/_export.module.scss';
import style from './TabsMenu.module.scss';

interface TabsMenuProps {
  variant: 'Notifications' | 'AmbassadorPage';
}

const StyledTab = styled(Tab)(() => ({
  '&': {
    color: `${vars.subtitlesColor}`,
    textTransform: 'none',
    letterSpacing: '-0.1px',
    margin: '0 12px',
    padding: '5px 0 0 0',
  },
  '&:focus': {
    color: `${vars.mainTextColor}`,
  },
  '&.Mui-selected': {
    color: `${vars.mainTextColor}`,
  },
}));

const TabsMenu: React.FC<TabsMenuProps> = ({ variant }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabLabels =
    variant === 'Notifications'
      ? ['Прочитанные', 'Непрочитанные']
      : ['Общая информация', 'Размещенный контент', 'Программа лояльности'];

  return (
    <Box>
      <Tabs
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
      </Tabs>
    </Box>
  );
};

export default TabsMenu;
