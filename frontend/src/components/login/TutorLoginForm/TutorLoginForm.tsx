import { useState } from "react";
import { ShortButtonFixed } from "../../common/button/Button";
import { tutorLoginApi } from "../../../api/tutorApis";
import { useNavigate } from "react-router-dom";
import educell from "../../../assets/images/educell.png";
import style from "./TutorLoginForm.module.css";


export const TutorLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  async function submitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = {
      email: email,
      password: password
    }
    try {
      const response = await tutorLoginApi(body);
      localStorage.setItem("access_token", response.data.data.access_token);
      navigate("/tutor")
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <img src={educell} className={style.image} />
      <div className={style.title}>강사 로그인</div>
      <div className={style.mainDiv}>
        <form onSubmit={submitLogin}>
          <div className={style.emailDiv}>
            <label htmlFor="email" />
            <input type="email" 
              id="email" 
              value={email} 
              onChange={handleEmailChange} 
              placeholder="email"
              className={style.emailInput} />
          </div>
          <div className={style.passwordDiv}>
            <label htmlFor="password" />
            <input type="password" 
              id="password" 
              value={password} 
              onChange={handlePasswordChange} 
              placeholder="password"
              className={style.passwordInput} />
          </div>
          <ShortButtonFixed type="submit" className={style.submitButton}>
            로그인
          </ShortButtonFixed> 
        </form>
      </div>
    </>
  );
};