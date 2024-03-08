import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login/Login';
import { useEffect } from 'react';
import Template from '@templates/Template/Template';
import { useAppDispatch, useAppSelector } from '@services/typeHooks';
import { RootState } from '@services/redux/store';
import { getProfileUser, logoutUser } from '@services/redux/slices/auth/auth';
import Ambassadors from '@pages/Ambassadors';
import Logout from '@/pages/Logout';
import { getAmbassadors } from '@services/redux/slices/ambassadors/ambassadors';

const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state: RootState) => state.user.isLoading);
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.user.isLoggedIn
  );
  const access = localStorage.getItem('accessToken') ?? '';

  useEffect(() => {
    if (access.length !== 0) {
      dispatch(getProfileUser({ access }));
      dispatch(getAmbassadors({ access }));
    } else {
      dispatch(logoutUser({ access }));
    }
  }, [access, dispatch]);

  return (
    <Template isLoading={isLoading} isLoggedIn={isLoggedIn}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ambassadors" element={<Ambassadors />} />
      </Routes>
    </Template>
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
