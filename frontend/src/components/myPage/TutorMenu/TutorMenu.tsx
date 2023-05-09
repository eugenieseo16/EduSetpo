import style from "./TutorMenu.module.scss";
import { BsBellFill } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { VscVerifiedFilled } from "react-icons/vsc";
import { MdColorLens, MdMuseum, MdLiveHelp } from "react-icons/md";

interface MenuProps {
  menuIcon: string;
  menuName: string;
}

export const TutorMenu: React.FC<MenuProps> = ({ menuIcon, menuName }) => {
  return (
    <div className={style.MenuWrapper}>
      {menuIcon == "stat" ? (
        <SiGoogleanalytics
          className={style.MenuIcon}
          size="25"
          color="#84D88A"
        />
      ) : menuIcon == "theme" ? (
        <MdColorLens className={style.MenuIcon} size="25" color="#D6B39E" />
      ) : menuIcon == "noti" ? (
        <BsBellFill className={style.MenuIcon} size="25" color="#FEC107" />
      ) : menuIcon == "museum" ? (
        <MdMuseum className={style.MenuIcon} size="25" color="#B3B3B3" />
      ) : menuIcon == "help" ? (
        <MdLiveHelp className={style.MenuIcon} size="25" color="#A889FF" />
      ) : (
        <VscVerifiedFilled
          className={style.MenuIcon}
          size="25"
          color="#458EFF"
        />
      )}
      <div className={style.MenuName}>{menuName}</div>
    </div>
  );
};
