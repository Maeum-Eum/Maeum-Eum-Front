import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const isLogin = !!localStorage.getItem('accessToken');

  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};
