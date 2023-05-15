import axios from 'axios';
import { homeworkApiUrls } from './apiUrls';
import axios from 'axios';

// homeworkApiUrls.homeworkApiUrl
// 숙제 수정 구현 필요

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
  axios
    .get(`${homeworkApiUrls.homeworkApiUrl}/${studentId}/${sessionId}`)
    .then(Response => {
      console.log(Response);
      return Response;
    })
    .catch(Error => {
      console.log(Error);
    });
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
