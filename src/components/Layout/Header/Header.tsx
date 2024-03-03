import { useState } from 'react';
import { AppBar, Box, Typography, styled } from '@mui/material';
import Logo from '@icons/Logo';
import Logout from '@icons/Logout';
import { IconButton } from '../../ui/Buttons/Buttons';
import styles from './Header.module.scss';
import UniversalModal from '@/components/ui/Modal/Modal';

const CustomHeaderBar = styled(AppBar)(() => ({
  '&.MuiAppBar-root': {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position: 'relative',
  },
}));

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleLogout = () => {
    // Add code here for logging out, e.g., navigate to /logout
    console.log('Logging out');
    handleCloseModal();
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    handleCloseModal();
  };

  const modalContent = (
    <Typography variant="body1">
      Вы действительно хотите выйти из учетной записи?
    </Typography>
  );

  return (
    <CustomHeaderBar className={styles.header}>
      <Box className={styles.header__container} component="div">
        <Logo className={styles.header__logo} />
        <Box className={styles.header__info} component="div">
          <Box className={styles.header__userName} component="p">
            Мария Иванова
          </Box>
          <IconButton onClick={handleOpenModal} startIcon={<Logout />} />
          <UniversalModal
            open={modalOpen}
            onClose={handleCloseModal}
            content={modalContent}
            cancelButtonText="Отмена"
            confirmButtonText="Выйти"
            onConfirm={handleLogout}
            onCancel={handleCancel}
            size="small"
          />
        </Box>
      </Box>
    </CustomHeaderBar>
  );
};

export default Header;
