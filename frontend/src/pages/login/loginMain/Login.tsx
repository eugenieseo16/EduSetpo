import { NavLink, useNavigate } from "react-router-dom";
import { LongButton } from "../../../components/common/button/Button";
import style from "./Login.module.scss";
import educell from "../../../assets/images/educell.png";

export const Login = () => {

  const navigate = useNavigate();

  function toTutorLogin () {
    navigate(`tutor`);
  }

  function toParentLogin() {
    navigate(`parent`);
  }

  

  return (
    <>
      <img src={educell} className={style.image}/>
      <div>
        <LongButton variant="primary" onClick={toTutorLogin}>
          강사로 로그인
        </LongButton>
        <LongButton variant="success" onClick={toParentLogin}>
          학부모로 로그인
        </LongButton>
      </div>
    </>
  );
};