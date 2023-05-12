import { NavLink, useNavigate } from "react-router-dom";
import { ShortButtonHug } from "../../../components/common/button/Button";

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
      <div>
        Login
        <div>
          <ShortButtonHug variant="primary" onClick={toTutorLogin}>
            강사로 로그인
          </ShortButtonHug>
          <ShortButtonHug variant="success" onClick={toParentLogin}>
            학부모로 로그인
          </ShortButtonHug>
        </div>
      </div>
    </>
  );
};