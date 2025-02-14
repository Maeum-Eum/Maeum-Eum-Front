import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { FindAccount } from './pages/FindAccount';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: '/login/find-account', element: <FindAccount /> },
      {
        path: '',
        element: <ProtectedRoute />,
        children: [{ path: '', element: <Home /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);
