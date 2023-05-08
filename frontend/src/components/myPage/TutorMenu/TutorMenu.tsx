import style from "./TutorMenu.module.scss";
// import stat from "../../../assets/stats.png";

interface MenuProps {
  menuImg: string;
  menuName: string;
}

export const TutorMenu: React.FC<MenuProps> = ({ menuImg, menuName }) => {
  return (
    <div className={style.MenuWrapper}>
      <div className={style.MenuImg} />
      <div className={style.MenuName}>{menuName}</div>
    </div>
  );
};
