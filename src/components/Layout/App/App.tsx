import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login/Login';
import React, { useEffect, FC } from 'react';
import Header from '@components/Layout/Header/Header';
import Menu from '@components/Layout/Menu/Menu';
import Loader from '@/components/ui/Loader/Loader';
import { getProfileUser, logoutUser } from '@/services/redux/slices/auth/auth';
import { useAppDispatch, useAppSelector } from '@/services/typeHooks';
import { RootState } from '@/services/redux/store';
import Logout from '@/pages/Logout';

import styles from './App.module.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

interface TemplateProps {
  children: React.ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isLoginRoute = location.pathname === '/login';
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.user.isLoggedIn
  );
  const isLoading = useAppSelector((state: RootState) => state.user.isLoading);
  const access = localStorage.getItem('accessToken') ?? '';

  useEffect(() => {
    if (access.length !== 0) {
      dispatch(getProfileUser({ access }));
    } else {
      dispatch(logoutUser({ access }));
    }
  }, [access, dispatch]);

  if (isLoading) {
    return (
      <section className={isLoggedIn ? styles.page : styles.authPage}>
        <Loader />
      </section>
    );
  }

  return (
    <div className={isLoginRoute ? styles.loginTemplate : styles.template}>
      {!isLoginRoute && <Header />}
      {!isLoginRoute && <Menu />}
      {children}
    </div>
  );
};

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <Template>
        <App />
      </Template>
    </BrowserRouter>
  );
};

export default WrappedApp;
