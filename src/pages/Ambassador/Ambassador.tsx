import Content from '@components/Layout/Content/Content';
import UserContent from '@components/UserContent/UserContent';
import styles from './Ambassador.module.scss';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@services/typeHooks';
import { getAmbassador } from '@services/redux/slices/ambassadors/ambassadors';
import { logoutUser } from '@services/redux/slices/auth/auth';
import { useParams } from 'react-router-dom';
import { RootState } from '@services/redux/store';

const Ambassador = () => {
  const dispatch = useAppDispatch();
  const access = localStorage.getItem('accessToken') ?? '';
  const { id } = useParams();

  useEffect(() => {
    if (access.length !== 0 && id) {
      dispatch(getAmbassador({ access, id }));
    } else {
      dispatch(logoutUser({ access }));
    }
  }, [access, id, dispatch]);

  const ambassador = useAppSelector(
    (state: RootState) => state.ambassadors.ambassador
  );
  console.log(ambassador);

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
