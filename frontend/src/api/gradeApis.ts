import axios from 'axios';
import { gradeApiUrls } from './apiUrls';
import { Grade, GradeCategory } from '../types/grade';

// gradeApiUrls.gradeApiUrl
export const PostGrade = (body: Grade) => {
  axios
    .post(`${gradeApiUrls.gradeApiUrl}`, body)
    .then(Response => {
      console.log(Response);
    })
    .catch(Error => {
      console.log(Error);
    });
};

export const DeleteGrade = (gradeId: number) => {
  axios
    .delete(`${gradeApiUrls.gradeCategoryApiUrl}/${gradeId}`)
    .then(Response => {
      console.log(Response);
    })
    .catch(Error => {
      console.log(Error);
    });
};

// 학생수업의 전체 성적 조회
export const GetGrades = (studentLessonId: number) => {
  axios
    .get(`${gradeApiUrls.gradeApiUrl}/${studentLessonId}`)
    .then(Response => {
      console.log(Response);
      return Response;
    })
    .catch(Error => {
      console.log(Error);
    });
};

// 성적 카테고리별 조회
export const GetGradesByCategory = (
  studentLessonId: number,
  categoryId: number
) => {
  axios
    .get(`${gradeApiUrls.gradeApiUrl}/${studentLessonId}/${categoryId}`)
    .then(Response => {
      console.log(Response);
      return Response;
    })
    .catch(Error => {
      console.log(Error);
    });
};

// 수정 요청 API 작성

// gradeApiUrls.gradeCategoryApiUrl
export const PostGradeCategory = (body: GradeCategory) => {
  axios
    .post(`${gradeApiUrls.gradeCategoryApiUrl}`, body)
    .then(Response => {
      console.log(Response);
    })
    .catch(Error => {
      console.log(Error);
    });
};

export const DeleteGradeCategory = (gradeCategoryId: number) => {
  axios
    .delete(`${gradeApiUrls.gradeCategoryApiUrl}/${gradeCategoryId}`)
    .then(Response => {
      console.log(Response);
    })
    .catch(Error => {
      console.log(Error);
    });
};

export const GetGradeCategory = () => {
  axios
    .get(`${gradeApiUrls.gradeCategoryApiUrl}`)
    .then(Response => {
      console.log(Response);
      return Response;
    })
    .catch(Error => {
      console.log(Error);
    });
};
