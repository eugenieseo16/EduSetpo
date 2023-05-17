import { useState } from "react";
import { parentEmailApi, parentSignupApi } from "../../../api/parentApis";
import { useNavigate } from "react-router-dom";
import { ShortButtonFixed, ShortButtonHugSmall } from "../../common/button/Button";
import educell from "../../../assets/images/educell.png";
import style from "./ParentSignupForm.module.css";
import { SignupModal } from "../../auth/signupModal/SignupModal";

export const ParentSignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [parentName, setParentName] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const regxp = /\S+@\S+\.\S+/;

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!regxp.test(e.target.value)) {
      setIsEmail(false);
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
      setAlertMessage("이메일을 입력해주세요.");
      setIsOpen(true);
      setIsSuccess(false);
      return;
    } else if (!password) {
      setAlertMessage("비밀번호를 입력해주세요.");
      setIsOpen(true);
      setIsSuccess(false);
      return;
    } else if (!parentName) {
      setAlertMessage("이름을 입력해주세요.");
      setIsOpen(true);
      setIsSuccess(false);
      return;
    } 
    const body = {
      email: email,
      password: password,
      parent_name: parentName
    }
    try {
      const response = await parentSignupApi(body);
      setAlertMessage("회원가입이 완료되었습니다.");
      setIsOpen(true);
      setIsSuccess(true);
      setIsSigned(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function checkEmail(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!email) {
      setAlertMessage("이메일을 입력해주세요.");
      setIsOpen(true);
      setIsSuccess(false);
      return;
    } else if (!regxp.test(email)) {
      setAlertMessage("이메일 형식이 맞지 않습니다.");
      setIsOpen(true);
      setIsSuccess(false);
      return;
    }
    try {
      const response = await parentEmailApi(email);
      if (response.data.result == "success") {
        setAlertMessage(response.data.message);
        setIsOpen(true);
        setIsSuccess(true);
        setIsEmailChecked(true);
      } else {
        setAlertMessage(response.data.message);
        setIsOpen(true);
        setIsSuccess(false);
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
            <div className={style.emailDiv}>
              <label htmlFor="email">
                <input type="email" 
                  id="email" 
                  value={email} 
                  onChange={handleEmailChange} 
                  placeholder="이메일"
                  style={isEmailChecked ? 
                    { border : "2px solid #a9d998" } : 
                    { border : "2px solid black" }} />
              </label>
              <ShortButtonHugSmall onClick={checkEmail} 
                variant="custom" 
                customColor={isEmailChecked ? "#a9d998" : "#cecece"}>
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
      <SignupModal
        message={alertMessage}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        isSuccess={isSuccess}
        isSigned={isSigned}
      />
    </>
  );
}