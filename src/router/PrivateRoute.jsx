import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

export const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  localStorage.setItem('pathname', pathname + search);

  return authState.logged ? children : <Navigate to="/login" />;
};
