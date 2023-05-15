import { sessionApiUrls } from './apiUrls';
import axios from 'axios';

// sessionApiUrls.sessionApiUrl
export const readSessionApi = () => {
  const response = axios.get(`${sessionApiUrls.sessionApiUrl}`, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response;
};
// sessionApiUrls.sessionDetailApiUrl

// sessionApiUrls.sessionListApiUrl

// 세션 월별 조회
export const readSessionListMonthApi = async (month: number) => {
  const response = await axios.get(
    `${sessionApiUrls.sessionListApiUrl}/month/${month}`
  );
  return response;
};
