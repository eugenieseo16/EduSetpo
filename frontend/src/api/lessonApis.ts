import { lessonApiUrls } from './apiUrls';
import axios from 'axios';

// GET

// 강사별 수업 조회
// : lesson/{tutorId}
export const readLessonApi = async (tutorId: number) => {
  const response = await axios.get(`${lessonApiUrls.lessonApiUrl}/${tutorId}`);
  return response.data.responseData;
};

//수업 상세 조회
// : lesson/{tutorId}/{lessonId}
export const readLessonDetailApi = async (
  tutorId: number,
  lessonId: string
) => {
  const response = await axios.get(
    `${lessonApiUrls.lessonApiUrl}/${tutorId}/${lessonId}`
  );
  return response.data.responseData;
};

// 수업 비활성화
// : lesson/deactivate/{tutorId}/{lessonId}
export const deactivateLessonApi = async (
  tutorId: number,
  lessonId: number
) => {
  const response = await axios.get(
    `${lessonApiUrls.lessonDeactivateApiUrl}/${tutorId}/${lessonId}`
  );
  return response;
};

// POST

// 수업 생성
// : lesson
export const createLessonApi = async (token: string, body: any) => {
  const response = await axios.post(`${lessonApiUrls.lessonApiUrl}`, body, {
    headers: {
      Authorization: token,
    },
  });
  return response.data.responseData.lessonId;
};

// PUT

// 수업 수정
// lesson/{tutorId}/{lessonId}
export const updateLessonApi = (
  body: any,
  tutorId: number,
  lessonId: number
) => {
  const response = axios.put(
    `${lessonApiUrls.lessonApiUrl}/${tutorId}/${lessonId}`,
    body
  );
  return response;
};
