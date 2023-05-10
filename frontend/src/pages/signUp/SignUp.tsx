import { NavLink } from "react-router-dom";
import { ShortButtonFixed } from "../../components/common/button/Button";

export const SignUp = () => {
  return (
    <div className="SignUp">
      SignUp
      <div>
        <ShortButtonFixed variant="primary">
          <NavLink to="tutor">강사</NavLink>
        </ShortButtonFixed>
        <ShortButtonFixed variant="success">
          <NavLink to="parents">부모</NavLink>
        </ShortButtonFixed>
      </div>
    </div>
  );
};
