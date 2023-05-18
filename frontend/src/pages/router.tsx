import { RouteObject } from 'react-router-dom';
import { SignUp } from './signUp/signupMain/SignUp';
import { NomalPage } from './NomalPage';
import { Chart } from './chart/Chart';
import { Home } from './home/Home';
import { Schedule } from './schedule/Schedule';
import { StudentDetail } from './studentDetail/StudentDetail';
import { MyPage } from './myPage/MyPage';
import { ParentsMain } from './parentsMain/ParentsMain';
import { SessionDetail } from './sessionDetail/SessionDetail';
import { TutorLogin } from './login/tutorLogin/TutorLogin';
import { LandingPage } from './landingPage/LandingPage';
import { Login } from './login/loginMain/Login';
import { ParentLogin } from './login/parentLogin/ParentLogin';
import { TutorSignup } from './signUp/tutorSignup/TutorSignup';
import { ParentSignup } from './signUp/parentSignup/ParentSignup';
import {
  ClassManagement,
  ClassCreate,
  ClassDetail,
  ClassUpdate,
} from './classManagement';
import { AddChild } from './addChild/AddChild';
import { TutorEdit } from './tutorEdit/TutorEdit';
import { StudentList } from './studentList/StudentList';
import { StudentCreate } from './studentCreate/StudentCreate';
import { Temp } from './Temp';
import { ChildrenLessonDetail } from './childlrenLessonDetail/ChildlrenLessonDetail';

const router: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />,
    children: [],
  },
  // 지울 예정
  {
    path: '/dear-eugene',
    element: <Temp />,
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
        path: 'student/:studentId',
        element: <StudentDetail />,
        children: [],
      },
      {
        path: 'student/list',
        element: <StudentList />,
        children: [],
      },
      {
        path: 'student/list/:lessonId',
        element: <StudentList />,
        children: [],
      },
      {
        path: 'student/create',
        element: <StudentCreate />,
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
        path: 'class/update/:id',
        element: <ClassUpdate />,
        children: [],
      },
      {
        path: 'session/:sessionId',
        element: <SessionDetail />,
        children: [],
      },
      {
        path: 'mypage',
        element: <MyPage />,
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
      {
        path: 'children/lesson/detail/:studentLessonId',
        element: <ChildrenLessonDetail />,
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
