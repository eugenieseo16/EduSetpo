import { studentApiUrls } from './apiUrls';
import axios from 'axios';

// studentApiUrls.studentApiUrl
export const readStudentApi = () => {
  const response = axios.get(`${studentApiUrls.studentApiUrl}`, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response;
};

// studentApiUrls.studentCreateApiUrl
export const createStudentApi = (body: any) => {
  const response = axios.post(`${studentApiUrls.studentCreateApiUrl}`, body, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response;
};

// studentApiUrls.studentListApiUrl
export const readStudentListApi = () => {
  const response = axios.get(`${studentApiUrls.studentListApiUrl}`, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response;
};

// studentApiUrls.studentToggleApiUrl
export const toggleStudentApi = (body: any) => {
  const response = axios.put(`${studentApiUrls.studentToggleApiUrl}`, body, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response;
};

// studentApiUrls.studentLessonApiUrl
export const readStudentLessonApi = (studentLessonId: number) => {
  const response = axios.get(
    `${studentApiUrls.studentLessonApiUrl}/${studentLessonId}`,
    {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    }
  );
  return response;
};

// studentApiUrls.studentLessonToggleApiUrl
export const toggleStudentLessonApi = (body: any) => {
  const response = axios.put(`${studentApiUrls.studentLessonApiUrl}`, body, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response;
};
