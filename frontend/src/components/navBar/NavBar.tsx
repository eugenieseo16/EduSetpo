import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";

export const NavBar = () => {
  const location = useLocation().pathname.split("/")[1];

  return (
    <div className={style.NavBar}>
      <NavLink to="">홈</NavLink>
      {location == "tutor" ? (
        <>
          <NavLink to="schedule">일정관리</NavLink>
          <NavLink to="class">수업관리</NavLink>
          <NavLink to="student">학생관리</NavLink>
        </>
      ) : (
        <>
          <NavLink to="chart">통계</NavLink>
        </>
      )}
      <NavLink to="mypage">마이페이지</NavLink>
    </div>
  );
};
