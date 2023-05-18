import { SessionToggle, SessionUpdate } from '../types/session';
import { sessionApiUrls } from './apiUrls';
import axios, { AxiosRequestConfig } from 'axios';
// get
// 세션 샹세 조회
export const readSessionApi = (sessionId: number) => {
  const response = axios.get(
    `${sessionApiUrls.sessionDetailApiUrl}/${sessionId}`,
    {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    }
  );
  return response;
};

// 특정 날짜 세션 리스트 조회(yyyy-mm-dd)
export const readSessionListByDateApi = (actualDate: string) => {
  const response = axios.get(
    `${sessionApiUrls.sessionListApiUrl}/actual-date/${actualDate}`,
    {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    }
  );
  return response;
};

// 특정 년/월 기준 세션 리스트 조회(선택인자 : lessonId)
export const readSessionByYearAndMonthApi = async (
  year: number,
  month: number,
  lessonId?: number
) => {
  const token = localStorage.getItem('access_token');
  const response = await axios.get(
    `${sessionApiUrls.sessionListApiUrl}/month/${year}/${month}`,
    {
      params: {
        lessonId: lessonId || undefined,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

// lessonId 기준 세션 리스트 조회
export const readSessioinByLessonIdApi = (lessonId: number) => {
  const response = axios.get(
    `${sessionApiUrls.sessionListApiUrl}/lesson-id/${lessonId}`,
    {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    }
  );
  return response;
};

// put
// 세션 정보 수정
export const updateSessionApi = (sessionId: number, body: SessionUpdate) => {
  const response = axios.put(
    `${sessionApiUrls.sessionDetailApiUrl}/${sessionId}`,
    body,
    {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    }
  );
  return response;
};
// 세션 토글
export const toggleSessionApi = (sessionId: number, body: SessionToggle) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  };

  const config: AxiosRequestConfig<SessionToggle> = {
    headers: headers,
  };

  axios
    .put(
      `${sessionApiUrls.sessionDetailApiUrl}/toggle/${sessionId}`,
      body,
      config
    )
    .then(response => {
      return response;
    });
};
