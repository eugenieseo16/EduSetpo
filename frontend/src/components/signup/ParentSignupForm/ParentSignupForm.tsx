import { useState } from "react";
import { parentEmailApi, parentSignupApi } from "../../../api/parentApis";
import { useNavigate } from "react-router-dom";
import { ShortButtonFixed, ShortButtonHugSmall } from "../../common/button/Button";
import educell from "../../../assets/images/educell.png";
import style from "./ParentSignupForm.module.css";

export const ParentSignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [parentName, setParentName] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isEmail, setIsEmail] = useState(true);

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const regxp = /\S+@\S+\.\S+/;
    if (!regxp.test(e.target.value)) {
      setIsEmail(false);
      console.log(isEmail, e.target.value);
    } else {
      setIsEmail(true);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleParentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParentName(e.target.value);
  };

  async function submitSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) {
      console.log("Please write email");
      return;
    } else if (!password) {
      console.log("Please enter password");
      return;
    } else if (!parentName) {
      console.log("Please enter name");
      return;
    } 
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
    if (!email) {
      console.log("이메일 입력 부탁")
      return;
    }
    try {
      const response = await parentEmailApi(email);
      alert(response.data.message);
      if (response.data.result == "success") {
        setIsEmailChecked(true);
      } else {
        setIsEmailChecked(false);
      }
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
          <div className={style.bigDiv}>
            <div>
              <label htmlFor="email">
                <input type="email" 
                  id="email" 
                  value={email} 
                  onChange={handleEmailChange}
                  placeholder="이메일"
                  className={isEmailChecked ? style.checkedEmailInput : style.emailInput} />
              </label> 
              <ShortButtonHugSmall onClick={checkEmail} 
                variant="custom" 
                customColor="#cecece"
                className={style.checkButton}>
                중복
              </ShortButtonHugSmall>
            </div>
            {
              isEmail ?
              null :
              <div style={{ marginLeft: "10px", color: "red"}}>
                잘못된 이메일 형식입니다.
              </div>
            }
            <div>
              <label htmlFor="password" />
              <input type="password" 
                id="password" 
                value={password} 
                onChange={handlePasswordChange}
                placeholder="비밀번호"
                className={style.passwordInput} />
            </div>
            <div>
              <label htmlFor="name" />
              <input type="text" 
                id="name" 
                value={parentName} 
                onChange={handleParentNameChange}
                placeholder="이름"
                className={style.nameInput} />
            </div>
          </div>
          <ShortButtonFixed type="submit" className={style.submitButton} variant="success">
            회원가입
          </ShortButtonFixed>
        </form>
      </div>
    </>
  );
}