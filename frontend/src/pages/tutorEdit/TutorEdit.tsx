import style from "./TutorEdit.module.scss";
import { BigIconEdit } from "../../components/common/userIcon/UserIcon";
import { TutorEditInput } from "../../components/tutorEdit/TutorEditInput/TutorEditInput";
import { LongButton } from "../../components/common/button/Button";
import { NavLink } from "react-router-dom";
import { TutorEditMenus } from "../../components/tutorEdit/TutorEditMenus/TutorEditMenus";

export const TutorEdit = () => {
  return (
    <div className={style.MainWrapper}>
      <BigIconEdit />
      <TutorEditInput />
      <LongButton>
        <NavLink to="/tutor/edit">변경하기</NavLink>
      </LongButton>
      <div className={style.forSpacing} />
      <TutorEditMenus />
    </div>
  );
};
