import { AppBar, Box, Button, styled } from '@mui/material';
import Logo from '@icons/Logo';
import Logout from '@icons/Logout';
import vars from '@styles/_exports.module.scss';
import styles from './Header.module.scss';

const CustomHeaderBar = styled(AppBar)(() => ({
  '&.MuiAppBar-root': {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
}));

const CustomButton = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    padding: '0',
    minWidth: '40px',
    '&:hover': {
      backgroundColor: vars.hoverFiledColor,
    },
  },
}));

const Header = () => {
  return (
    <CustomHeaderBar className={styles.header}>
      <Box className={styles.header__container} component="div">
        <Logo className={styles.header__logo} />
        <Box className={styles.header__info} component="div">
          <Box className={styles.header__userName} component="p">
            Мария Иванова
          </Box>
          <CustomButton className={styles.header__button}>
            <Logout className={styles.header__logoutIcon} />
          </CustomButton>
        </Box>
      </Box>
    </CustomHeaderBar>
  );
};

export default Header;
