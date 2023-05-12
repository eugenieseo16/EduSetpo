import { lessonTagApiUrls } from './apiUrls';
import axios from 'axios';

// GET
// 수업별 태그 조회
// : tag/{lessonId}
export const readTagsByLesson = (lessonId: number) => {
  const response = axios.get(
    `${lessonTagApiUrls.tagByClassApiUrl}/${lessonId}`
  );
  return response;
};

// 태그 검색
// : tutor/tag/{tutorId}/{input}
export const searchTags = (tutorId: number, input: string) => {
  const response = axios.get(
    `${lessonTagApiUrls.tagApiUrl}/${tutorId}/${input}`
  );
  return response;
};

// POST
// 태그 등록
// : tutor/tag/{tutorId}
export const createTag = (tutorId: number, body: any) => {
  const response = axios.get(`${lessonTagApiUrls.tagApiUrl}/${tutorId}`, body);
  return response;
};
