import { parentApiUrls } from './apiUrls';
import axios from 'axios';

// parentApiUrls.parentApiUrl;
export const parentApi = (token: String | null) => {
  const response = axios.get(`${parentApiUrls.parentApiUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

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
export const parentPasswordUpdateApi = (body: any, token: String | null) => {
  const response = axios.put(
    `${parentApiUrls.parentPasswordUpdateApiUrl}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

// parentApiUrls.parentSignupApiUrl;
export const parentSignupApi = (body: any) => {
  const response = axios.post(`${parentApiUrls.parentSignupApiUrl}`, body);
  return response;
};

// parentApiUrls.parentWithdrawApiUrl;
export const parentWithdrawApi = (token: String | null) => {
  const response = axios.put(`${parentApiUrls.parentWithdrawApiUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
