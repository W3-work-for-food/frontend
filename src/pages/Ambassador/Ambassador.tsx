import Content from '@components/Layout/Content/Content';
import UserContent from '@components/UserContent/UserContent';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '@components/ui/Buttons/Buttons';
import ArrowLeft from '@icons/ArrowLeft';
import styles from './Ambassador.module.scss';
import Plus from '@icons/Plus';
import UniversalModal from '@components/ui/Modal/Modal';
import { DefaultTypography, TableLabel } from '@components/ui/Form/Elements';
import { Box } from '@mui/material';
import { DefaultInput } from '@components/ui/Inputs/Inputs';

const Ambassador = () => {
  const [value, setValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const modalContent = (
    <DefaultTypography className={styles.modal}>
      Отправка мерча
      <Box component="div" className={styles.modal__fields}>
        <Box component="div" className={`${styles.modal__field} ${styles.modal__field_type}`}>
          <TableLabel>Тип мерча *</TableLabel>
          <DefaultInput className={styles.modal__input} id="clothing-size" aria-describedby="clothing-size-text" placeholder="Выберите тип"  />
        </Box>
        <Box component="div" className={`${styles.modal__field} ${styles.modal__field_comment}`}>
          <TableLabel>Комментарий *</TableLabel>
          <DefaultInput className={styles.modal__input} id="clothing-size" aria-describedby="clothing-size-text" placeholder="Укажите, за что отправляем подарок"  />
        </Box>
      </Box>
    </DefaultTypography>
  );

  return (
    <>
      <div className={styles.controls}>
        <SecondaryButton
          component={Link}
          to="/ambassadors"
          startIcon={<ArrowLeft />}
          style={{
            minWidth: '40px',
            height: '40px',
            padding: '0',
            borderRadius: '12px',
          }}
        />
        {value === 2 && <PrimaryButton onClick={handleModal} className={styles.button} style={{gap: '8px', padding:'0 16px', borderRadius: '16px', height: '40px', width: '169px'}} startIcon={<Plus />}>Отправить мерч</PrimaryButton>}
      </div>
      <Content className={styles.ambassadorPage}>
        <div
          style={{
            gridArea: 'profile',
            backgroundColor: 'white',
            height: '272px',
          }}
        />
        <div
          style={{
            gridArea: 'comment',
            backgroundColor: 'white',
            height: '332px',
          }}
        />
        <UserContent value={value} onChange={handleChange} />
        <UniversalModal
          open={modalOpen}
          onClose={handleModal}
          content={modalContent}
          cancelButtonText="Отменить"
          confirmButtonText="Отправить"
          onConfirm={handleModal}
          onCancel={handleModal}
          size="large"
        />
      </Content>
    </>
  );
};

export default Ambassador;
