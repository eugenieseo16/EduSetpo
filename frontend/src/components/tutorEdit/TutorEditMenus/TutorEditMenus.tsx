import style from "../../myPage/TutorMenus/TutorMenus.module.scss";
import { TutorEditMenu } from "../TutorEditMenu/TutorEditMenu";

export const TutorEditMenus: React.FC = () => {
  return (
    <div className={style.MenusWrapper}>
      {/* <img src={stat} /> */}
      <TutorEditMenu menuName="비밀번호 변경" />
      <TutorEditMenu menuName="계정 관리" />
      <TutorEditMenu menuName="회원탈퇴" />
    </div>
  );
};
