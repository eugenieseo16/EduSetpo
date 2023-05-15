import { useState } from "react";
import { tutorEmailApi, tutorNicknameApi, tutorSignupApi } from "../../../api/tutorApis";
import { ShortButtonFixed, ShortButtonHug } from "../../common/button/Button";
import { useNavigate } from "react-router-dom";
import educell from "../../../assets/images/educell.png";
import style from "./TutorSignupForm.module.css";

export const TutorSignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  

  async function submitSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) {
      console.log("Please write email");
      return;
    } else if (!password) {
      console.log("Please enter password");
      return;
    } else if (!name) {
      console.log("Please enter name");
      return;
    } else if (!nickname) {
      console.log("Please enter nickname");
      return;
    }

    const body = {
      email: email,
      password: password,
      name: name,
      nickname: nickname
    }
    try {
      const response = await tutorSignupApi(body);
      console.log(response);
      navigate("/login/tutor");
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
      const response = await tutorEmailApi(email);
      console.log(response.data.result);
      if (response.data.result == "success") {
        setIsEmailChecked(true);
      } else {
        setIsEmailChecked(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function checkNickname(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!nickname) {
      console.log("닉네임 입력 부탁")
      return;
    }

    try {
      const response = await tutorNicknameApi(nickname);
      if (response.data.result == "success") {
        setIsNicknameChecked(true);
      } else {
        setIsNicknameChecked(false);
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <img src={educell} className={style.image} />
      <div className={style.title}>강사 회원가입</div>
      <div className={style.mainDiv}>
        <form onSubmit={submitSignup}>
          <div className={style.emailDiv}>
            <label htmlFor="email" />
            <input type="email" 
              id="email" 
              value={email} 
              onChange={handleEmailChange} 
              placeholder="이메일"
              className={isEmailChecked ? style.checkedEmailInput : style.emailInput} />
          </div>
          <ShortButtonHug onClick={checkEmail} className={style.emailCheckButton}>
            중복 확인
          </ShortButtonHug>
          <div className={style.passwordDiv}>
            <label htmlFor="password" />
            <input type="password" 
              id="password" 
              value={password} 
              onChange={handlePasswordChange} 
              placeholder="비밀번호"
              className={style.passwordInput}/>
          </div>
          <div className={style.nameDiv}>
            <label htmlFor="name" />
            <input type="text" 
              id="name" 
              value={name} 
              onChange={handleNameChange} 
              placeholder="이름"
              className={style.nameInput}/>
          </div>
          <div className={style.nicknameDiv}>
            <label htmlFor="nickname" />
            <input type="text" 
              id="nickname" 
              value={nickname} 
              onChange={handleNicknameChange} 
              placeholder="닉네임"
              className={isNicknameChecked ? style.checkedNicknameInput : style.nicknameInput} />
          </div>
          <ShortButtonHug onClick={checkNickname} className={style.nicknameCheckButton}>
            중복 확인
          </ShortButtonHug>
          <ShortButtonFixed type="submit" className={style.submitButton}>
            회원가입
          </ShortButtonFixed>
        </form>
      </div>
    </>
  );
}