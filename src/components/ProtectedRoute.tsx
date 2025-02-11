import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const isLogin = false; //TODO: 실제 로그인 확인 로직으로 변경 필요

  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};
