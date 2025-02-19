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
import { Resume } from './pages/Resume';
import { Accept } from './pages/Accept';
import { ProfileUpload } from './pages/ProfileUpload';
import { NearElder } from './pages/NearElder';
import { DetailElderInfo } from './pages/DetailElderInfo';
import { AcceptComplete } from './pages/AcceptComplete';
import { DetailCareInfo } from './pages/DetailCareInfo';
import { Contact } from './pages/Contact';
import { MyPage } from './pages/MyPage';
import { InBox } from './pages/InBox';
import { OutGoingBox } from './pages/OutGoingBox';
import { DynamicHome } from './components/home/DynamicHome';
import { ModifyCenter } from './pages/ModifyCenter';
import { ResumeComplete } from './components/Resume/ResumeComplete';
import { ElderRegisterComplete } from './components/ElderRegister/ElderRegisterComplete';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'login', element: <Login /> },
      {
        path: 'signup',
        element: <SignUp />,
      },
      { path: 'signup/profile-upload', element: <ProfileUpload /> },
      { path: 'welcome', element: <SignUpComplete /> },
      { path: '/login/find-account', element: <FindAccount /> },
      { path: 'search-center', element: <SearchCenter /> },
      { path: 'complete', element: <ResumeComplete /> },
      { path: 'complete2', element: <ElderRegisterComplete /> },

      {
        path: '',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/',
            element: <Home />,
            children: [
              //TODO: 요양보호사/사회복지사 여부에 따라 element 바꾸기
              { path: '', element: <DynamicHome /> },
              { path: 'near', element: <NearElder /> },
              { path: 'mypage', element: <MyPage /> },
            ],
          },
          { path: 'elder-register', element: <ElderRegister /> },
          { path: 'resume', element: <Resume /> },
          { path: 'accept/:contactId', element: <Accept /> },
          { path: 'accept/complete', element: <AcceptComplete /> },
          { path: 'apply/:elderId', element: <Accept /> },
          { path: 'apply/complete', element: <AcceptComplete /> },
          { path: 'detail/elder/:elderId', element: <DetailElderInfo /> },
          {
            path: 'detail/elder/contact/:contactId',
            element: <DetailElderInfo />,
          },
          { path: 'detail/care/:contactId', element: <DetailCareInfo /> },
          { path: 'contact/:careId', element: <Contact /> },
          { path: 'inbox', element: <InBox /> },
          { path: 'outgoing-box', element: <OutGoingBox /> },
          {
            path: 'modify-center/:centerId',
            element: <ModifyCenter />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);
