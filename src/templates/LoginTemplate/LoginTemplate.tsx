import React, { FC } from 'react';
import styles from './LoginTemplate.module.scss';

interface LoginTemplateProps {
  children: React.ReactNode;
}

const LoginTemplate: FC<LoginTemplateProps> = ({ children }) => {
  return (
    <div className={styles.template}>
      {children}
    </div>
  );
};

export default LoginTemplate;