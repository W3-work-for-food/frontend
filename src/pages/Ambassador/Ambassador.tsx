import Content from '@components/Layout/Content/Content';
import styles from './Ambassador.module.scss';
import UserContent from '@components/UserContent/UserContent';

const Ambassador = () => {
  return (
    <>
      <div style={{ gridArea: 'controls', height: '76px' }} />
      <Content className={styles.ambassadorPage}>
        <div style={{ gridArea: 'profile', backgroundColor: 'white', height: '272px' }}></div>
        <div style={{ gridArea: 'comment', backgroundColor: 'white', height: '332px' }}></div>
        <UserContent />
      </Content>
    </>
  );
};

export default Ambassador;