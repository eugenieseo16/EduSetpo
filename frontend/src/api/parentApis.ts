import { parentApiUrls } from './apiUrls';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { parentInfoState } from '../atoms/user.atom';

// parentApiUrls.parentApiUrl;
// parentloginform으로 이동

// parentApiUrls.parentEmailApiUrl;
export const parentEmailApi = (email: String) => {
  const response = axios.get(
    `${parentApiUrls.parentEmailApiUrl}?email=${email}`
  );
  return response;
};

// parentApiUrls.parentLoginApiUrl;
export const parentLoginApi = (body: any) => {
  const response = axios.post(`${parentApiUrls.parentLoginApiUrl}`, body);
  return response;
};

// parentApiUrls.parentPasswordUpdateApiUrl;
export const parentPasswordUpdateApi = (body: any) => {
  const response = axios.put(
    `${parentApiUrls.parentPasswordUpdateApiUrl}`,
    body
  );
  return response;
};

// parentApiUrls.parentSignupApiUrl;
export const parentSignupApi = (body: any) => {
  const response = axios.post(`${parentApiUrls.parentSignupApiUrl}`, body);
  return response;
};

// parentApiUrls.parentWithdrawApiUrl;
export const parentWithdrawApi = (body: any) => {
  const response = axios.put(`${parentApiUrls.parentWithdrawApiUrl}`, body);
};
