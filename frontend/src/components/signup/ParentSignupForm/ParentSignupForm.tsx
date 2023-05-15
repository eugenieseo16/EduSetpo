import { useState } from "react";
import { parentEmailApi, parentSignupApi } from "../../../api/parentApis";
import { useNavigate } from "react-router-dom";
import { ShortButtonFixed, ShortButtonHug } from "../../common/button/Button";
import educell from "../../../assets/images/educell.png";
import style from "./ParentSignupForm.module.css";

export const ParentSignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [parentName, setParentName] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleParentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParentName(e.target.value);
  };

  async function submitSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
      parent_name: parentName
    }
    try {
      const response = await parentSignupApi(body);
      console.log(response);
      navigate("/login/parent");
    } catch (error) {
      console.log(error);
    }
  }

  async function checkEmail(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const response = await parentEmailApi(email);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <img src={educell} className={style.image} />
      <div className={style.title}>학부모 회원가입</div>
      <div className={style.mainDiv}>
        <form onSubmit={submitSignup}>
          <div className={style.emailDiv}>
            <label htmlFor="email" />
            <input type="email" 
              id="email" 
              value={email} 
              onChange={handleEmailChange}
              placeholder="이메일"
              className={style.emailInput} />
          </div>
          <ShortButtonHug onClick={checkEmail}  className={style.emailCheckButton}>중복 확인</ShortButtonHug>
          <div className={style.passwordDiv}>
            <label htmlFor="password" />
            <input type="password" 
              id="password" 
              value={password} 
              onChange={handlePasswordChange}
              placeholder="비밀번호"
              className={style.passwordInput} />
          </div>
          <div className={style.nameDiv}>
            <label htmlFor="name" />
            <input type="text" 
              id="name" 
              value={parentName} 
              onChange={handleParentNameChange}
              placeholder="이름"
              className={style.nameInput} />
          </div>
          <ShortButtonFixed type="submit" className={style.submitButton}>
            회원가입
          </ShortButtonFixed>
        </form>
      </div>
    </>
  );
}