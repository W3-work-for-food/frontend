import Content from '@components/Layout/Content/Content';
import UserContent from '@components/UserContent/UserContent';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '@components/ui/Buttons/Buttons';
import ArrowLeft from '@icons/ArrowLeft';
import styles from './Ambassador.module.scss';

const Ambassador = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        {value === 2 && <PrimaryButton>Отправить мерч</PrimaryButton>}
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
      </Content>
    </>
  );
};

export default Ambassador;
