import Login from '@/components/Layout/Forms/Login/Login';
import styles from './Login.module.scss';

import { FormContainer } from '@/components/ui/Form/Elements';

const LoginPage = () => {
  return (
    <FormContainer className={styles.containerLogin}>
      <div className={styles.loginForm}>
        <Login />
      </div>
    </FormContainer>
  );
};

export default LoginPage;
