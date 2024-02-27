import { Box, MenuItem, MenuList, styled } from '@mui/material';
import vars from '@styles/_export.module.scss';
import styles from './Menu.module.scss';

const menuItems = [
  {
    id: 1,
    name: 'Уведомления',
  },
  {
    id: 2,
    name: 'Aмбассадоры',
  },
  {
    id: 3,
    name: 'Дашборд',
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
    '&:hover': {
      backgroundColor: vars.hoverFiledColor,
    },
    '&:focus': {
      backgroundColor: vars.globalWhite,
    },
  },
}));

const Menu = () => {
  return (
    <Box className={styles.menu} component="nav">
      <CustomList className={styles.menu__list}>
        {menuItems.map((item) => (
          <CustomMenuItem
            className={styles.menu__item}
            key={item.id}
            disableRipple
          >
            {item.name}
          </CustomMenuItem>
        ))}
      </CustomList>
    </Box>
  );
};

export default Menu;
