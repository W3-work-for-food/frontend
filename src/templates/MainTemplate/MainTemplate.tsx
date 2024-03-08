import React, { FC } from 'react';
import Header from '@components/Layout/Header/Header';
import Menu from '@components/Layout/Menu/Menu';
import styles from './MainTemplate.module.scss';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className={styles.mainTemplate}>
      <Header />
      <Menu />
      {children}
    </div>
  );
};

export default MainTemplate;
