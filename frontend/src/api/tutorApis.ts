import { tutorApiUrls } from './apiUrls';
import { tutorInfoState } from '../atoms/user.atom';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

// tutorApiUrls.tutorApiUrl
export const tutorApi = (token: String | null) => {
  const setTutorInfo = useSetRecoilState(tutorInfoState);
  axios
    .get(`${tutorApiUrls.tutorApiUrl}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response;
    });
};

// tutorApiUrls.tutorEmailApiUrl
export const tutorEmailApi = (email: String) => {
  const response = axios.get(`${tutorApiUrls.tutorEmailApiUrl}?email=${email}`);
  return response;
};

// tutorApiUrls.tutorLoginApiUrl
export const tutorLoginApi = (body: any) => {
  const response = axios.post(`${tutorApiUrls.tutorLoginApiUrl}`, body);
  return response;
};

// tutorApiUrls.tutorNicknameApiUrl
export const tutorNicknameApi = (nickname: String) => {
  const response = axios.get(
    `${tutorApiUrls.tutorNicknameApiUrl}?nickname=${nickname}`
  );
  return response;
};

// tutorApiUrls.tutorNicknameUpdateApiUrl
export const tutorNicknameUpdateApi = (body: any, token: String | null) => {
  const response = axios.put(
    `${tutorApiUrls.tutorNicknameUpdateApiUrl}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

// tutorApiUrls.tutorPasswordUpdateApiUrl
export const tutorPasswordUpdateApi = (body: any, token: String | null) => {
  const response = axios.put(
    `${tutorApiUrls.tutorPasswordUpdateApiUrl}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

// tutorApiUrls.tutorProfileUrlApiUrl
export const tutorProfileUrlApi = (body: any, token: String | null) => {
  const response = axios.put(`${tutorApiUrls.tutorProfileUrlApiUrl}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

// tutorApiUrls.tutorSignupApiUrl
export const tutorSignupApi = (body: any) => {
  const response = axios.post(`${tutorApiUrls.tutorSignupApiUrl}`, body);
  return response;
};

// tutorApiUrls.tutorThemeApiUrl
export const tutorThemeApi = (body: any, token: String | null) => {
  const response = axios.put(`${tutorApiUrls.tutorThemeApiUrl}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

// tutorApiUrls.tutorWithdrawApiUrl
export const tutorWithdrawApi = (token: String | null) => {
  const response = axios.put(`${tutorApiUrls.tutorWithdrawApiUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

// tutorApiUrls
export const tutorNameApi = (tutor_id: Number) => {
  const response = axios.get(`${tutorApiUrls.tutorApiUrl}/${tutor_id}`);
  return response;
};
