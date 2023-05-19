import { Student } from './../types/student.d';
import axios from 'axios';
import { homeworkApiUrls } from './apiUrls';

// homeworkApiUrls.homeworkApiUrl
// 숙제 수정 구현 필요
// 숙제 T/F 따라서 진행도 반환하는 API 구현

interface PostHomeworkProps {
  content: string;
  sessionId: number;
  studentId: number;
}

// 숙제 작성(연결 완료)
export const PostHomework = ({
  content,
  sessionId,
  studentId,
}: PostHomeworkProps) => {
  axios
    .post(
      `${homeworkApiUrls.homeworkApiUrl}/?content=${content}&sessionId=${sessionId}&studentId=${studentId}`
    )
    .then(Response => {
      console.log(Response);
    })
    .catch(Error => {
      console.log(Error);
    });
};

// 숙제 조회(연결 완)
export const GetHomework = (studentId: number, sessionId: number) => {
  const response = axios.get(
    `${homeworkApiUrls.homeworkApiUrl}/${studentId}/${sessionId}`
  );

  return response;
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
