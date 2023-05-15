import { sessionApiUrls } from './apiUrls';
import axios from 'axios';

// sessionApiUrls.sessionApiUrl
// sessionApiUrls.sessionDetailApiUrl
// sessionApiUrls.sessionListApiUrl

// 세션 월별 조회
export const readSessionListMonthApi = async (month: number) => {
  const response = await axios.get(
    `${sessionApiUrls.sessionListApiUrl}/month/${month}`
  );
  return response;
};
