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

// findAllSessionByActualDate: 특정 날짜의 session 조회
export const readTodayClassesSessionApi = async (date: string) => {
  const response = await axios.get(
    `${sessionApiUrls.sessionActualDateApiUrl}/${date}`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4Z3V1QG5hdmVyLmNvbSIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJ0dXRvcklkIjoyLCJpYXQiOjE2ODQxMjMyNzAsImV4cCI6MTY4NDcyODA3MH0.22vaFIqrZ-5UvkxRDvWFWFEkGeZ3mQKKxXzhr_5K26s',
        // Authorization: localStorage.getItem('access_token'),
      },
    }
  );
  return response.data.responseData;
};
