import axios from 'axios';
import { gradeApiUrls } from './apiUrls';
import { Grade, GradeCategory } from '../types/grade';

// gradeApiUrls.gradeApiUrl
// 성적수정 요청 API 작성

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
  // axios
  //   .get(`${gradeApiUrls.gradeApiUrl}/${studentLessonId}`)
  //   .then(Response => {
  //     console.log(Response);
  //     return Response;
  //   })
  //   .catch(Error => {
  //     console.log(Error);
  //   });

  return [
    {
      gradeId: 1,
      categoryId: 1,
      examDate: '2023-05-15',
      examTitle: '5월 평가원',
      score: 95,
      studentSessionId: 1,
    },
    {
      gradeId: 2,
      categoryId: 1,
      examDate: '2023-03-12',
      examTitle: '3월 평가원',
      score: 89,
      studentSessionId: 1,
    },
    {
      gradeId: 3,
      categoryId: 2,
      examDate: '2023-05-06',
      examTitle: '중간고사',
      score: 90,
      studentSessionId: 1,
    },
    {
      gradeId: 4,
      categoryId: 3,
      examDate: '2023-04-23',
      examTitle: '1주차',
      score: 95,
      studentSessionId: 1,
    },
    {
      gradeId: 5,
      categoryId: 3,
      examDate: '2023-04-30',
      examTitle: '2주차',
      score: 90,
      studentSessionId: 1,
    },
  ];
};

// 성적 카테고리별 조회
export const GetGradesByCategory = (
  studentLessonId: number,
  categoryId: number
) => {
  // axios
  //   .get(`${gradeApiUrls.gradeApiUrl}/${studentLessonId}/${categoryId}`)
  //   .then(Response => {
  //     console.log(Response);
  //     return Response;
  //   })
  //   .catch(Error => {
  //     console.log(Error);
  //   });
  return [
    {
      gradeId: 1,
      categoryId: 1,
      examDate: '2023-05-15',
      examTitle: '5월 평가원',
      score: 95,
      studentSessionId: 1,
    },
    {
      gradeId: 2,
      categoryId: 1,
      examDate: '2023-03-12',
      examTitle: '3월 평가원',
      score: 89,
      studentSessionId: 1,
    },
  ];
};

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
  // axios
  //   .get(`${gradeApiUrls.gradeCategoryApiUrl}`)
  //   .then(Response => {
  //     console.log(Response);
  //     return Response;
  //   })
  //   .catch(Error => {
  //     console.log(Error);
  //   });

  return [
    { categoryid: 1, category: '모의고사' },
    { categoryid: 2, category: '내신' },
    { categoryid: 3, category: '단어시험' },
    { categoryid: 4, category: '쪽지시험' },
  ];
};
