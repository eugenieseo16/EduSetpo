import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShortButtonFixed } from "../../common/button/Button";
import { parentLoginApi, parentSignupApi } from "../../../api/parentApis";

export const ParentLoginForm = () => {
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
      const response = await parentLoginApi(body);
      localStorage.setItem("access_token", response.data.data.access_token);
      navigate("/parent");
    } catch (error) {
      console.log(error);
    }
  }

  async function signup() {
    const body = {
      email: "xguu@naver.com",
      password: "1234",
      parent_name: "서형준"
    }
    try {
      const response = await parentSignupApi(body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div>
        <form onSubmit={submitLogin}>
          <div>
            <label htmlFor="email">이메일 : </label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label htmlFor="password">비밀번호 : </label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <ShortButtonFixed type="submit">
            로그인하기
          </ShortButtonFixed> 
        </form>
      </div>
      <ShortButtonFixed onClick={signup}>test</ShortButtonFixed>
    </>
  );
}