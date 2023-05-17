import { Student, StudentToggle, StudentUpdate } from '../types/student';
import { studentApiUrls } from './apiUrls';
import axios from 'axios';

// get
// 학생 디테일 조회
export const readStudentApi = async (studentId: string) => {
  const token = 'Bearer ' + localStorage.getItem('access_token');
  const response = await axios.get(
    `${studentApiUrls.studentApiUrl}/${studentId}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response;
};

export const readStudentListApi = async () => {
  const token = 'Bearer ' + localStorage.getItem('access_token');
  console.log(token);
  const response = await axios.get(`${studentApiUrls.studentListApiUrl}`, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};

// post
export const createStudentApi = (body: Student) => {
  const token = 'Bearer ' + localStorage.getItem('access_token');

  const response = axios.post(`${studentApiUrls.studentCreateApiUrl}`, body, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};

// put
export const toggleStudentApi = (body: StudentToggle) => {
  const token = 'Bearer ' + localStorage.getItem('access_token');

  const response = axios.put(`${studentApiUrls.studentToggleApiUrl}`, body, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};

export const updateStudentApi = (body: StudentUpdate) => {
  const token = 'Bearer ' + localStorage.getItem('access_token');

  const response = axios.put(`${studentApiUrls.studentApiUrl}`, body, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};

// get
export const readStudentLessonApi = (studentLessonId: number) => {
  const token = 'Bearer ' + localStorage.getItem('access_token');

  const response = axios.get(
    `${studentApiUrls.studentLessonApiUrl}/${studentLessonId}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response;
};

export const readStudentLessonListApi = async (studentId: string) => {
  const token = 'Bearer ' + localStorage.getItem('access_token');

  const response = await axios.get(
    `${studentApiUrls.studentLessonApiUrl}/list`,
    {
      params: {
        studentId: studentId,
      },
      headers: {
        Authorization: token,
      },
    }
  );
  return response;
};

// studentApiUrls.studentLessonToggleApiUrl
// 굳이 안만들어도 됨
export const toggleStudentLessonApi = (body: any) => {
  const token = 'Bearer ' + localStorage.getItem('access_token');

  const response = axios.put(`${studentApiUrls.studentLessonApiUrl}`, body, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};
