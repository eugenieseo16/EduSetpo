import style from "./TutorMenus.module.scss";
import { TutorMenu } from "../TutorMenu/TutorMenu";

export const TutorMenus: React.FC = () => {
  return (
    <div className={style.MenusWrapper}>
      {/* <img src={stat} /> */}
      <TutorMenu menuIcon="stat" menuName="통계" />
      <TutorMenu menuIcon="theme" menuName="테마" />
      <TutorMenu menuIcon="noti" menuName="알림" />
      <TutorMenu menuIcon="museum" menuName="박물관" />
      <TutorMenu menuIcon="help" menuName="고객센터" />
      <TutorMenu menuIcon="ver" menuName="앱 버전" />
    </div>
  );
};
