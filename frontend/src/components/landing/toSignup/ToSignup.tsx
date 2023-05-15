import { NavLink, useNavigate } from "react-router-dom";
import style from "./ToSignup.module.css";
import { LongButton } from "../../common/button/Button";

export const ToSignup = () => {
  const navigate = useNavigate();

  function toSignup() {
    navigate(`signup`);
  }

	return (
		<>
		<LongButton className={style.toSignup} variant="custom" customColor="#a9d998" onClick={toSignup}>
      회원가입 하러가기
		</LongButton>
		</>
	)
};