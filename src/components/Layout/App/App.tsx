import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login/Login';
import { useEffect } from 'react';
import Template from '@templates/Template/Template';
import { useAppDispatch, useAppSelector } from '@services/typeHooks';
import { RootState } from '@services/redux/store';
import { getProfileUser, logoutUser } from '@services/redux/slices/auth/auth';
import Ambassadors from '@pages/Ambassadors';
import {
  getAmbassador,
  getAmbassadors,
} from '@services/redux/slices/ambassadors/ambassadors';
import Logout from '@/pages/Logout';
import Ambassador from '@/pages/Ambassador/Ambassador';
import RequireAuth from '@/components/ReqAuth';
import { ROUTE_HOME } from '@/utils/constants';
import Home from '@/pages/Home';

const App = () => {
  const dispatch = useAppDispatch();
  const curAmbassador = useAppSelector(
    (state: RootState) => state.ambassadors.curAmbassador
  );
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

  useEffect(() => {
    if (curAmbassador && access.length !== 0) {
      dispatch(getAmbassador({ access, id: curAmbassador }));
    }
  }, [access, curAmbassador, dispatch]);

  return (
    <Template isLoading={isLoading} isLoggedIn={isLoggedIn}>
      <Routes>
        <Route
          path={ROUTE_HOME}
          element={
            <RequireAuth onlyAuth isLoggedIn={isLoggedIn} isLoading={isLoading}>
              <Outlet />
            </RequireAuth>
          }
        >
          <Route path="/" element={<Navigate to="/ambassadors" />} />
          <Route path="/ambassadors" element={<Ambassadors />} />
          <Route path="/notifications" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/ambassador/:id" element={<Ambassador />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
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
