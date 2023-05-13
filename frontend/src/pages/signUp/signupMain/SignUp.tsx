import { NavLink } from "react-router-dom";
import { ShortButtonHug } from "../../../components/common/button/Button";

export const SignUp = () => {
  return (
    <div className="SignUp">
      SignUp
      <div>
        <ShortButtonHug variant="primary">
          <NavLink to="tutor">강사로 시작하기</NavLink>
        </ShortButtonHug>
        <ShortButtonHug variant="success">
          <NavLink to="parent">학부모로 시작하기</NavLink>
        </ShortButtonHug>
      </div>
    </div>
  );
};
