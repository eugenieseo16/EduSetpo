import style from "./UserIcon.module.scss";
import setpo from "../../assets/setpo_main.png";

export const SmallIcon: React.FC = () => {
  return (
    <>
      <img className={style.smallIcon} src={setpo} alt="세포" />
    </>
  );
};
