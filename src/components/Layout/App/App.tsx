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
import Notifications from '@pages/Notifications/Notifications';
import {
  getAmbassador,
  getAmbassadors,
} from '@services/redux/slices/ambassadors/ambassadors';
import { getMerch, getMerchBudget } from '@services/redux/slices/merch/merch';
import Logout from '@/pages/Logout';
import Ambassador from '@/pages/Ambassador/Ambassador';

const App = () => {
  const dispatch = useAppDispatch();
  const curAmbassador = useAppSelector(
    (state: RootState) => state.ambassadors.curAmbassador
  );
  const isLoading = useAppSelector((state: RootState) => {
    return state.user.isLoading || state.ambassadors.isLoading;
  });
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

  useEffect(() => {
    if (curAmbassador && access.length !== 0) {
      dispatch(getAmbassador({ access, id: curAmbassador }));
      dispatch(getMerch({ access, id: curAmbassador }));
      dispatch(getMerchBudget({ access, id: curAmbassador }));
    }
  }, [access, curAmbassador, dispatch]);

  return (
    <Template isLoading={isLoading} isLoggedIn={isLoggedIn}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/ambassadors" element={<Ambassadors />} />
        <Route path="/ambassador/:id" element={<Ambassador />} />
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
