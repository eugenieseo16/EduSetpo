import { NavLink } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="SignUp">
      SignUp
      <div>
        <button>
          <NavLink to="tutor">강사</NavLink>
        </button>
        <button>
          <NavLink to="parents">부모</NavLink>
        </button>
      </div>
    </div>
  );
};
