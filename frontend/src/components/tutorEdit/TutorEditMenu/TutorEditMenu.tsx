import style from "./TutorEditMenu.module.scss";

interface MenuProp {
  menuName: string;
}

export const TutorEditMenu: React.FC<MenuProp> = ({ menuName }) => {
  return (
    <div className={style.MenuWrapper}>
      <div className={style.MenuName}>{menuName}</div>
    </div>
  );
};
