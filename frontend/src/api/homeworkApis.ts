import axios from 'axios';
import { homeworkApiUrls } from './apiUrls';

// homeworkApiUrls.homeworkApiUrl
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

// homeworkApiUrls.homeworkCompleteApiUrl
export const CompleteHomework = () => {
  axios
    .post(`${homeworkApiUrls.homeworkCompleteApiUrl}`)
    .then(Response => {
      console.log(Response);
    })
    .catch(Error => {
      console.log(Error);
    });
};
