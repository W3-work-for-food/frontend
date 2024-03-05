import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login';
import { useEffect } from 'react';
import Loader from '@/components/ui/Loader/Loader';
import { getProfileUser, logoutUser } from '@/services/redux/slices/auth/auth';
import { useAppDispatch, useAppSelector } from '@/services/typeHooks';
import { RootState } from '@/services/redux/store';
import './App.module.scss';
import Logout from '@/pages/Logout';

const App = () => {
  const dispatch = useAppDispatch();
  // const user = useAppSelector((state: RootState) => state.user.user);
  const isLoading = useAppSelector((state: RootState) => state.user.isLoading);
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.user.isLoggedIn
  );
  const access = localStorage.getItem('accessToken') ?? '';

  useEffect(() => {
    if (access.length !== 0) {
      dispatch(getProfileUser({ access }));
    } else {
      dispatch(logoutUser({ access }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (isLoading) {
    return (
      <section className={isLoggedIn ? 'page' : 'auth-page'}>
        <Loader />
      </section>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default WrappedApp;
