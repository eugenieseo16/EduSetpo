import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ShortButtonFixed } from '../../common/button/Button';
import { parentApi, parentLoginApi } from '../../../api/parentApis';
import style from './ParentLoginForm.module.css';
import educell from '../../../assets/images/educell.png';
import { parentInfoState } from '../../../atoms/user.atom';
import { useRecoilState } from 'recoil';
import { parentApiUrls } from '../../../api/apiUrls';
import { LoginModal } from '../../auth/loginModal/LoginModal';

export const ParentLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [parentInfo, setParentInfo] = useRecoilState(parentInfoState);
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
      if (response.data.result == 'fail') {
        setAlertMessage(response.data.message);
        setIsOpen(true);
        return;
      }
      localStorage.setItem('access_token', response.data.data.access_token);
      parentApi(response.data.data.access_token);

      navigate('/parents');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      parentApi(token);
    }
  }, []);

  const parentApi = (token: string | null) => {
    axios
      .get(`${parentApiUrls.parentApiUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        const { parentId, name, email } = response.data.data;
        const parentInfo = { parentId, name, email };
        setParentInfo(parentInfo);
        console.log(response.data.data);

        return response;
      });
  };

  return (
    <>
      <img src={educell} className={style.image} />
      <div className={style.title}>학부모 로그인</div>
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
      <LoginModal
        message={alertMessage}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        />
    </>
  );
};
