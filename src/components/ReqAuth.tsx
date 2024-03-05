import { Navigate } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_LOGIN } from '@/utils/constants';

const RequireAuth = ({
  children,
  onlyAuth,
  isLoggedIn,
  isLoading,
}: {
  children: JSX.Element;
  onlyAuth: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
}) => {
  if (isLoading === false)
    if (onlyAuth === true)
      return isLoggedIn === true ? children : <Navigate to={ROUTE_LOGIN} />;
    else return isLoggedIn === false ? children : <Navigate to={ROUTE_HOME} />;
  return null;
};

export default RequireAuth;
