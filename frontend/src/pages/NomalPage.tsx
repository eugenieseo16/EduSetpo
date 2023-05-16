import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "../components/common/navBar/NavBar";
import style from "./NomalPage.module.css";

export const NomalPage = () => {
  const location = useLocation().pathname.split("/")[1];

  return (
    <>
      {location == "login" || location == "signup" ? <div className={style.wangDiv} /> : null}
      <div className={style.NomalPage}>
        <div className={style.outlet}>
          <Outlet />
        </div>
        <div className={style.navBar}>
          <NavBar />
        </div>
      </div>
    </>
  );
};
