import style from "./UserIcon.module.scss";
import setpo from "../../../assets/setpo_main.png";
import { RiPencilFill } from "react-icons/ri";

export const SmallIcon: React.FC = () => {
  return (
    <>
      <img className={style.smallIcon} src={setpo} alt="세포" />
    </>
  );
};

export const BigIconEdit: React.FC = () => {
  return (
    <>
      <div className={style.bigIconEdit}>
        <img className={style.iconImg} src={setpo} alt="세포" />
        <div className={style.editIconDiv}>
          <RiPencilFill color="#293241" size="1.4rem" />
        </div>
      </div>
    </>
  );
};
