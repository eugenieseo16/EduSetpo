import { useEffect, useState } from 'react';
import { ShortButtonFixed } from '../../common/button/Button';
import { tutorApi, tutorLoginApi } from '../../../api/tutorApis';
import { useNavigate } from 'react-router-dom';
import educell from '../../../assets/images/educell.png';
import style from './TutorLoginForm.module.css';
import { useSetRecoilState } from 'recoil';
import { tutorInfoState } from '../../../atoms/user.atom';
import axios from 'axios';
import { tutorApiUrls } from '../../../api/apiUrls';

export const TutorLoginForm = () => {
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
      const response = await tutorLoginApi(body);
      if (response.data.result == 'fail') {
        alert(response.data.message);
        return;
      }
      localStorage.setItem('access_token', response.data.data.access_token);
      navigate('/tutor');
    } catch (error) {
      console.log(error);
    }
  }

  const setTutorInfo = useSetRecoilState(tutorInfoState);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    tutorApi(token);
  }, []);

  const tutorApi = (token: string | null) => {
    axios
      .get(`${tutorApiUrls.tutorApiUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        const { tutorId, name, nickname, themeIndex } = response.data.data;
        setTutorInfo({
          tutorId,
          name,
          nickname,
          themeIndex,
        });
        return response;
      });
  };

  return (
    <>
      <img src={educell} className={style.image} />
      <div className={style.title}>강사 로그인</div>
      <div className={style.mainDiv}>
        <form onSubmit={submitLogin}>
          <div className={style.bigDiv}>
            <div>
              <label htmlFor="email" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="email"
                className={style.emailInput}
              />
            </div>
            <div>
              <label htmlFor="password" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="password"
                className={style.passwordInput}
              />
            </div>
          </div>
          <ShortButtonFixed
            type="submit"
            className={style.submitButton}
            variant="success"
          >
            로그인
          </ShortButtonFixed>
        </form>
      </div>
    </>
  );
};
