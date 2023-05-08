import { RouteObject } from "react-router-dom";
import { ClassManagement } from "./classManagement/ClassManagement";
import { SignUp } from "./signUp/SignUp";
import { NomalPage } from "./NomalPage";
import { Chart } from "./chart/Chart";
// import { Home } from "./home/Home";
import { Schedule } from "./schedule/Schedule";
import { Student } from "./student/Student";
import { MyPage } from "./myPage/MyPage";
import { ParentsMain } from "./parentsMain/ParentsMain";

const router: RouteObject[] = [
  {
    path: "/",
    element: <SignUp />,
    children: [],
  },
  {
    path: "/tutor",
    element: <NomalPage />,
    children: [
      {
        path: "",
        element: <ParentsMain />,
        children: [],
      },
      {
        path: "schedule",
        element: <Schedule />,
        children: [],
      },
      {
        path: "class",
        element: <ClassManagement />,
        children: [],
      },
      {
        path: "student",
        element: <Student />,
        children: [],
      },
      {
        path: "mypage",
        element: <MyPage />,
        children: [],
      },
    ],
  },
  {
    path: "/parents",
    element: <NomalPage />,
    children: [
      {
        path: "",
        element: <ParentsMain />,
        children: [],
      },
      {
        path: "chart",
        element: <Chart />,
        children: [],
      },
      {
        path: "mypage",
        element: <MyPage />,
        children: [],
      },
    ],
  },
];

export default router;
