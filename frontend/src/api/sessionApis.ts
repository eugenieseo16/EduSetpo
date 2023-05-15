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
