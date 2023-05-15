import { Student, StudentToggle, StudentUpdate } from '../types/student';
import { studentApiUrls } from './apiUrls';
import axios from 'axios';

// get
export const readStudentApi = (studentId: number) => {
  const response = axios.get(`${studentApiUrls.studentApiUrl}/${studentId}`, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response;
};

export const readStudentListApi = () => {
  const response = axios.get(`${studentApiUrls.studentListApiUrl}`, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response;
};

// post
export const createStudentApi = (body: Student) => {
  const response = axios.post(`${studentApiUrls.studentCreateApiUrl}`, body, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response;
};

// put
export const toggleStudentApi = (body: StudentToggle) => {
  const response = axios.put(`${studentApiUrls.studentToggleApiUrl}`, body, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response;
};

export const updateStudentApi = (body: StudentUpdate) => {
  const response = axios.put(`${studentApiUrls.studentApiUrl}`, body, {
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
// 굳이 안만들어도 됨
export const toggleStudentLessonApi = (body: any) => {
  const response = axios.put(`${studentApiUrls.studentLessonApiUrl}`, body, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
  return response;
};
