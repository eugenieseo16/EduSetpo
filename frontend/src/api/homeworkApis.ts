import axios from 'axios';
import { homeworkApiUrls } from './apiUrls';

// homeworkApiUrls.homeworkApiUrl
// 숙제 수정 구현 필요
// 숙제 tf따라서 진행도 반환하는 API 구현

export const PostHomework = () => {
  axios
    .post(`${homeworkApiUrls.homeworkApiUrl}`)
    .then(Response => {
      console.log(Response);
    })
    .catch(Error => {
      console.log(Error);
    });
};

export const GetHomework = (studentId: number, sessionId: number) => {
  // axios
  //   .get(`${homeworkApiUrls.homeworkApiUrl}/${studentId}/${sessionId}`)
  //   .then(Response => {
  //     console.log(Response);
  //     return Response;
  //   })
  //   .catch(Error => {
  //     console.log(Error);
  //   });

  return [
    {
      homeworkId: 1,
      content: '1번 숙제',
      isCompleted: false,
      sessionId: 1,
      studentId: 1,
    },
    {
      homeworkId: 2,
      content: '2번 숙제',
      isCompleted: false,
      sessionId: 1,
      studentId: 1,
    },
    {
      homeworkId: 3,
      content: '3번 숙제',
      isCompleted: true,
      sessionId: 1,
      studentId: 1,
    },
    {
      homeworkId: 4,
      content: '4번 숙제',
      isCompleted: false,
      sessionId: 1,
      studentId: 1,
    },
  ];
};

export const DeleteHomework = (homeworkId: number) => {
  axios
    .delete(`${homeworkApiUrls.homeworkApiUrl}/${homeworkId}`)
    .then(Response => {
      console.log(Response);
    })
    .catch(Error => {
      console.log(Error);
    });
};

// homeworkApiUrls.homeworkCompleteApiUrl
export const CompleteHomework = (homeworkId: number) => {
  axios
    .put(`${homeworkApiUrls.homeworkCompleteApiUrl}/${homeworkId}`)
    .then(Response => {
      console.log(Response);
    })
    .catch(Error => {
      console.log(Error);
    });
};
