import Content from '@components/Layout/Content/Content';
import UserContent from '@components/UserContent/UserContent';
import styles from './Ambassador.module.scss';

const Ambassador = () => {
  return (
    <>
      <div style={{ gridArea: 'controls', height: '76px' }} />
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
        <UserContent />
      </Content>
    </>
  );
};

export default Ambassador;
