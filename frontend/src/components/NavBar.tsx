import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <NavLink to="/schedule">일정관리</NavLink>
      <NavLink to="class">수업관리</NavLink>
      <NavLink to="home">홈</NavLink>
      <NavLink to="student">학생관리</NavLink>
    </div>
  );
};
