import { lessonApiUrls } from './apiUrls';
import axios from 'axios';

// GET

// 강사별 수업 조회
// : lesson/{tutorId}
export const readLessonApi = (tutorId: number) => {
  const response = axios.get(`${lessonApiUrls.lessonApiUrl}/${tutorId}`);
  return response;
};

//수업 상세 조회
// : lesson/deactivate/{tutorId}/{lessonId}
export const readLessonDetailApi = (tutorId: number, lessonId: number) => {
  const response = axios.get(
    `${lessonApiUrls.lessonApiUrl}/${tutorId}/${lessonId}`
  );
  return response;
};

// 수업 비활성화
// : lesson/deactivate/{tutorId}/{lessonId}
export const deactivateLessonApi = (tutorId: number, lessonId: number) => {
  const response = axios.get(
    `${lessonApiUrls.lessonDeactivateApiUrl}/${tutorId}/${lessonId}`
  );
  return response;
};

// PUT

// 수업 생성
// : lesson
export const createLessonApi = (body: any) => {
  const response = axios.put(`${lessonApiUrls.lessonApiUrl}`, body);
  return response;
};

// POST

// 수업 수정
// lesson/{tutorId}/{lessonId}
export const updateLessonApi = (
  body: any,
  tutorId: number,
  lessonId: number
) => {
  const response = axios.post(
    `${lessonApiUrls.lessonApiUrl}/${tutorId}/${lessonId}`,
    body
  );
  return response;
};
