import { NavLink, useNavigate } from "react-router-dom";
import style from "./ToLogin.module.css";
import { LongButton } from "../../common/button/Button";

export const ToLogin = () => {

  const navigate = useNavigate();

  function toLogin() {
    navigate(`login`);
  }

	return (
		<>
			<LongButton className={style.toLogin} onClick={toLogin}>
				로그인 하러 가기
			</LongButton>
		</>
	);
};