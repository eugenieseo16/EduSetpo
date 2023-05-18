import { lessonTagApiUrls } from './apiUrls';
import axios from 'axios';

// GET
// 수업별 태그 조회
// : tag/{lessonId}
export const readTagsByLesson = async (lessonId: number) => {
  const response = await axios.get(
    `${lessonTagApiUrls.tagByClassApiUrl}/${lessonId}`
  );
  return response.data.responseData;
};

// 태그 검색
// : tutor/tag/{tutorId}/{input}
export const searchTags = async (tutorId: number, input: string) => {
  const response = await axios.get(
    `${lessonTagApiUrls.tagApiUrl}/${tutorId}/${input}`
  );
  return response.data.responseData;
};

// POST
// 태그 등록
// : tutor/tag/{tutorId}
export const createTagApi = async (tutorId: number, body: any) => {
  const response = await axios.post(
    `${lessonTagApiUrls.tagApiUrl}/${tutorId}`,
    body
  );
  return response.data.responseData;
};
