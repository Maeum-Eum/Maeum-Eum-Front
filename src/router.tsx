import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { SignUpComplete } from './pages/SignUpComplete';
import { FindAccount } from './pages/FindAccount';
import { SearchCenter } from './pages/SearchCenter';
import { ElderRegister } from './pages/ElderRegister';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'elder-register', element:<ElderRegister/>},
      { path: 'welcome', element: <SignUpComplete /> },
      { path: '/login/find-account', element: <FindAccount /> },
      { path: 'search-center', element: <SearchCenter /> },
      {
        path: '',
        element: <ProtectedRoute />,
        children: [{ path: '', element: <Home /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);
