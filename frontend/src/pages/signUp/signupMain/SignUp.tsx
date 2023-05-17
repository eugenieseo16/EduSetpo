import { NavLink, useNavigate } from "react-router-dom";
import { LongButton } from "../../../components/common/button/Button";
import educell from "../../../assets/images/educell.png";
import style from "./SignUp.module.css";

export const SignUp = () => {

  const navigate = useNavigate();

  function toTutorSignUp() {
    navigate(`tutor`);
  }

  function toParentSignUp() {
    navigate(`parent`);
  }

  return (
    <>
      <img src={educell} className={style.image} />
      <div className={style.title}>회원가입</div>
      <div className={style.mainDiv}>
        <LongButton variant="primary" onClick={toTutorSignUp} className={style.tutorSignup}>
          강사로 시작하기
        </LongButton>
        <LongButton variant="success" onClick={toParentSignUp} className={style.parentSignup}>
          학부모로 시작하기
        </LongButton>
      </div>
    </>
  );
};
