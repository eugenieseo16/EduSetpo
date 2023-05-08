import style from "./TutorInfoBar.module.scss";
import { NavLink } from "react-router-dom";
import { SmallIcon } from "../../userIcon/UserIcon";
import { TutorInfo } from "../TutorInfo/TutorInfo";
import { ShortButtonFixed } from "../../button/Button";

export const TutorInfoBar: React.FC = () => {
  return (
    <div className={style.InfoBar}>
      <SmallIcon />
      <TutorInfo />
      <ShortButtonFixed variant="primary">
        <NavLink to="tutor">계정</NavLink>
      </ShortButtonFixed>
    </div>
  );
};
