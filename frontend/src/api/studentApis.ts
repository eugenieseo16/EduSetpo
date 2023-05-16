import { Student, StudentToggle, StudentUpdate } from '../types/student';
import { studentApiUrls } from './apiUrls';
import axios from 'axios';

// get
// 학생 디테일 조회
export const readStudentApi = async (studentId: string) => {
  const response = await axios.get(
    `${studentApiUrls.studentApiUrl}/${studentId}`,
    {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    }
  );
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

<<<<<<< HEAD
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
=======
export const updateStudentApi = (body: StudentUpdate) => {
  const response = axios.put(`${studentApiUrls.studentApiUrl}`, body, {
    headers: {
      Authorization: localStorage.getItem('access_token'),
    },
  });
>>>>>>> 857c5c9faeca9a19913bced10ba2df5feb3dd365
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
