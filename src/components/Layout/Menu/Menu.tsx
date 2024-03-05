import { Box, MenuItem, MenuList, styled } from '@mui/material';
import vars from '@styles/_export.module.scss';
import { useLocation } from 'react-router-dom';
import styles from './Menu.module.scss';

const menuItems = [
  {
    id: 1,
    name: 'Уведомления',
    path: '/notifications',
  },
  {
    id: 2,
    name: 'Aмбассадоры',
    path: '/ambassadors',
  },
  {
    id: 3,
    name: 'Дашборд',
    path: '/dashboard',
  },
];
const CustomList = styled(MenuList)(() => ({
  '&.MuiList-root': {
    padding: '0',
    gap: '12px',
    maxWidth: '144px',
    margin: '0 auto',
  },
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  '&.MuiMenuItem-root': {
    padding: '8px 0 8px 24px',
    borderRadius: '16px',
    width: '100%',
    minHeight: '36px',
    '&.active': {
      backgroundColor: vars.globalWhite,

      '&:hover': {
        backgroundColor: vars.globalWhite,
      },
    },
    '&:hover': {
      backgroundColor: vars.hoverFiledColor,
    },
  },
}));

const Menu = () => {
  const location = useLocation();

  return (
    <Box className={styles.menu} component="nav">
      <Box className={styles.menu__container} component="div">
        <CustomList className={styles.menu__list}>
          {menuItems.map((item) => (
            <CustomMenuItem
              className={`${styles.menu__item} ${location.pathname === item.path ? 'active' : ''}`}
              key={item.id}
              disableRipple
            >
              {item.name}
            </CustomMenuItem>
          ))}
        </CustomList>
      </Box>
    </Box>
  );
};

export default Menu;
