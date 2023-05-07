import { NavLink } from "react-router-dom";
import { LongButton, ShortButtonHug } from "../../components/button/Button";

export const SignUp = () => {
  return (
    <div className="SignUp">
      SignUp강사 부모
      <div>
        <LongButton variant="primary">
          <NavLink to="tutor">강사</NavLink>
        </LongButton>
        <LongButton variant="success">
          <NavLink to="parents">부모</NavLink>
        </LongButton>
      </div>
      SignUp강사 부모
      <div>
        <ShortButtonHug variant="primary">
          <NavLink to="tutor">dfsffdsff</NavLink>
        </ShortButtonHug>
        <ShortButtonHug variant="success">
          <NavLink to="parents">부모</NavLink>
        </ShortButtonHug>
      </div>
    </div>
  );
};
