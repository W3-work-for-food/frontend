import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '@components/ui/Loader/Loader';
import LoginTemplate from '@templates/LoginTemplate/LoginTemplate';
import MainTemplate from '@templates/MainTemplate/MainTemplate';
import styles from './Template.module.scss';

interface TemplateProps {
  children: React.ReactNode;
  isLoading: boolean;
  isLoggedIn: boolean;
}

const Template: FC<TemplateProps> = ({ children, isLoading, isLoggedIn }) => {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';

  if (isLoading) {
    return (
      <section className={isLoggedIn ? styles.page : styles.authPage}>
       <Loader />
      </section>
    );
  }

  const SelectedTemplate = isLoginRoute ? LoginTemplate : MainTemplate;

  return <SelectedTemplate>{children}</SelectedTemplate>;
};

export default Template;
