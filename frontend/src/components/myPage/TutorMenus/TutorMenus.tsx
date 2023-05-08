import style from "./TutorMenus.module.scss";
import { TutorMenu } from "../TutorMenu/TutorMenu";
import stat from "../../../assets/stats.png";

export const TutorMenus: React.FC = () => {
  return (
    <div className={style.MenusWrapper}>
      {/* <img src={stat} /> */}
      <TutorMenu menuImg="../../../assets/stats.png" menuName="통계" />
    </div>
  );
};
