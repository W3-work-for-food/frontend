import Content from '@components/Layout/Content/Content';
import UserContent from '@components/UserContent/UserContent';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Ambassador.module.scss';
import { pushAmbassador } from '@/services/redux/slices/ambassadors/ambassadors';
import { useAppDispatch } from '@/services/typeHooks';

const Ambassador = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(pushAmbassador(id));
    }
  }, [id, dispatch]);

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
