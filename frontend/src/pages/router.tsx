import { RouteObject } from 'react-router-dom';
import { SignUp } from './signUp/signupMain/SignUp';
import { NomalPage } from './NomalPage';
import { Chart } from './chart/Chart';
import { Home } from './home/Home';
import { Schedule } from './schedule/Schedule';
import { Student } from './studentDetail/StudentDetail';
import { MyPage } from './myPage/MyPage';
import { ParentsMain } from './parentsMain/ParentsMain';
import { SessionDetail } from './sessionDetail/SessionDetail';
import { Grade } from './grade/Grade';
import { TutorLogin } from './login/tutorLogin/TutorLogin';
import { LandingPage } from './landingPage/LandingPage';
import { Login } from './login/loginMain/Login';
import { ParentLogin } from './login/parentLogin/ParentLogin';
import { TutorSignup } from './signUp/tutorSignup/TutorSignup';
import { ParentSignup } from './signUp/parentSignup/ParentSignup';
import { ClassManagement, ClassCreate, ClassDetail } from './classManagement';
import { AddChild } from './addChild/AddChild';
import { TutorEdit } from './tutorEdit/TutorEdit';

const router: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />,
    children: [],
  },
  {
    path: '/tutor',
    element: <NomalPage />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [],
      },
      {
        path: 'schedule',
        element: <Schedule />,
        children: [],
      },
      {
        path: 'class',
        element: <ClassManagement />,
        children: [],
      },
      {
        path: 'class/create',
        element: <ClassCreate />,
        children: [],
      },
      {
        path: 'class/:id',
        element: <ClassDetail />,
        children: [],
      },
      {
        path: 'student',
        element: <Student />,
        children: [],
      },
      {
        path: 'student/session-detail',
        element: <SessionDetail />,
        children: [],
      },
      {
        path: 'mypage',
        element: <MyPage />,
        children: [],
      },
      {
        path: 'student/grade',
        element: <Grade />,
        children: [],
      },
      {
        path: 'edit',
        element: <TutorEdit />,
        children: [],
      },
    ],
  },
  {
    path: '/parents',
    element: <NomalPage />,
    children: [
      {
        path: '',
        element: <ParentsMain />,
        children: [],
      },
      {
        path: 'addchild',
        element: <AddChild />,
        children: [],
      },
      {
        path: 'chart',
        element: <Chart />,
        children: [],
      },
      {
        path: 'mypage',
        element: <MyPage />,
        children: [],
      },
    ],
  },
  {
    path: '/signup',
    element: <NomalPage />,
    children: [
      {
        path: '',
        element: <SignUp />,
        children: [],
      },
      {
        path: 'tutor',
        element: <TutorSignup />,
        children: [],
      },
      {
        path: 'parent',
        element: <ParentSignup />,
        children: [],
      },
    ],
  },
  {
    path: '/login',
    element: <NomalPage />,
    children: [
      {
        path: '',
        element: <Login />,
        children: [],
      },
      {
        path: 'tutor',
        element: <TutorLogin />,
        children: [],
      },
      {
        path: 'parent',
        element: <ParentLogin />,
        children: [],
      },
    ],
  },
];

export default router;
