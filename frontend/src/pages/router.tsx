import { RouteObject } from "react-router-dom";
import { NormalPage } from "./NomalPage";
import { Schedule } from "./schedule/Schedule";
import { Student } from "./student/Student";
import { ClassManagement } from "./classManagement/ClassManagement";
import { Home } from "./home/Home";
import { MyPage } from "./myPage/MyPage";
import { Parents } from "./parents/Parents";
import { SignUp } from "./signUp/SignUp";

const router: RouteObject[] = [
  {
    path: "/",
    element: <NormalPage />,
    children: [
      {
        path: "/",
        element: <SignUp />,
        children: [],
      },
      {
        path: "/schedule",
        element: <Schedule />,
        children: [],
      },
      {
        path: "/class",
        element: <ClassManagement />,
        children: [],
      },
      {
        path: "/home",
        element: <Home />,
        children: [],
      },
      {
        path: "/student",
        element: <Student />,
        children: [],
      },
      {
        path: "/mypage",
        element: <MyPage />,
        children: [],
      },
      {
        path: "/parents",
        element: <Parents />,
        children: [],
      },
    ],
  },
];

export default router;
