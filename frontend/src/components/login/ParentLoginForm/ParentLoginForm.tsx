import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShortButtonFixed } from "../../common/button/Button";
import { parentLoginApi, parentSignupApi } from "../../../api/parentApis";
import style from "./ParentLoginForm.module.css";
import educell from "../../../assets/images/educell.png";

export const ParentLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      password: password,
    };
    try {
      const response = await parentLoginApi(body);
      if (response.data.result == "fail") {
        alert(response.data.message);
        return;
      }
      localStorage.setItem("access_token", response.data.data.access_token);
      navigate("/parents");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <img src={educell} className={style.image} />
      <div className={style.title}>학부모 로그인</div>
      <div className={style.mainDiv}>
        <form onSubmit={submitLogin}>
          <div className={style.bigDiv}>
            <div>
              <label htmlFor="email" />
              <input type="email" 
                id="email" 
                value={email} 
                onChange={handleEmailChange} 
                placeholder="email"
                className={style.emailInput} />
            </div>
            <div>
              <label htmlFor="password" />
              <input type="password" 
                id="password" 
                value={password} 
                onChange={handlePasswordChange} 
                placeholder="password"
                className={style.passwordInput} />
            </div>
          </div>
          <ShortButtonFixed type="submit" className={style.submitButton} variant="success">
            로그인
          </ShortButtonFixed> 
        </form>
      </div>
    </>
  );
};