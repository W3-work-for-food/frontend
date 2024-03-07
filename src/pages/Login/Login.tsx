import Login from '@components/Layout/Forms/Login/Login';
import { FormContainer } from '@components/ui/Form/Elements';
import styles from './Login.module.scss';

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
