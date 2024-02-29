import { AppBar, Box, styled } from '@mui/material';
import Logo from '@icons/Logo';
import Logout from '@icons/Logout';
import styles from './Header.module.scss';
import { IconButton } from '../Buttons/Buttons';

const CustomHeaderBar = styled(AppBar)(() => ({
  '&.MuiAppBar-root': {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position: 'relative',
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
          <IconButton startIcon={<Logout />} />
        </Box>
      </Box>
    </CustomHeaderBar>
  );
};

export default Header;
