import { useState } from 'react';
import { Box } from '@mui/material';
import Logo from '@icons/Logo';
import Logout from '@icons/Logout';
import { IconButton } from '../../ui/Buttons/Buttons';
import styles from './Header.module.scss';
import UniversalModal from '@/components/ui/Modal/Modal';
import {
  CustomHeaderBar,
  DefaultTypography,
} from '@/components/ui/Form/Elements';
import { useAppSelector } from '@/services/typeHooks';
import { RootState } from '@/services/redux/store';

const Header = () => {
  const user = useAppSelector((state: RootState) => state.user.user);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleLogout = () => {
    // Add code here for logging out, e.g., navigate to /logout
    // console.log('Logging out');
    handleCloseModal();
  };

  const handleCancel = () => {
    // console.log('Cancel button clicked');
    handleCloseModal();
  };

  const modalContent = (
    <DefaultTypography style={{ fontSize: 16, marginBottom: 32 }}>
      Вы действительно хотите
      <br />
      выйти из учетной записи?
    </DefaultTypography>
  );

  return (
    <CustomHeaderBar className={styles.header}>
      <Box className={styles.header__container} component="div">
        <Logo className={styles.header__logo} />
        <Box className={styles.header__info} component="div">
          <Box className={styles.header__userName} component="p">
            {user.email}
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
