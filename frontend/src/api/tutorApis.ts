import { tutorApiUrls } from './apiUrls';
import axios from 'axios';

// tutorApiUrls.tutorApiUrl
export const tutorApi = (token: String | null) => {
  const response = axios.get(
    `${tutorApiUrls.tutorApiUrl}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response;
}


// tutorApiUrls.tutorEmailApiUrl
export const tutorEmailApi = (body: any) => {
  const response = axios.get(
    `${tutorApiUrls.tutorEmailApiUrl}`,
    body
  );
  return response;
}
 

// tutorApiUrls.tutorLoginApiUrl
export const tutorLoginApi = (body: any) => {
  const response = axios.post(
    `${tutorApiUrls.tutorLoginApiUrl}`,
    body
  );
  return response;
}
// tutorApiUrls.tutorNicknameApiUrl
export const tutorNicknameApi = (body: any) => {
  const response = axios.get(
    `${tutorApiUrls.tutorNicknameApiUrl}`,
    body
  );
  return response; 
}

// tutorApiUrls.tutorNicknameUpdateApiUrl
export const tutorNicknameUpdateApi = (body: any, token: String | null) => {
  const response = axios.put(
    `${tutorApiUrls.tutorNicknameUpdateApiUrl}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response;
}


// tutorApiUrls.tutorPasswordUpdateApiUrl
export const tutorPasswordUpdateApi = (body: any, token: String | null) => {
  const response = axios.put(
    `${tutorApiUrls.tutorPasswordUpdateApiUrl}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response;
}


// tutorApiUrls.tutorProfileUrlApiUrl
export const tutorProfileUrlApi = (body: any, token: String | null) => {
  const response = axios.put(
    `${tutorApiUrls.tutorProfileUrlApiUrl}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response;
}

// tutorApiUrls.tutorSignupApiUrl
export const tutorSignupApi = (body: any) => {
  const response = axios.post(
    `${tutorApiUrls.tutorSignupApiUrl}`,
    body
  );
  return response;
}

// tutorApiUrls.tutorThemeApiUrl
export const tutorThemeApi = (body: any, token: String | null) => {
  const response = axios.put(
    `${tutorApiUrls.tutorThemeApiUrl}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response;
}

// tutorApiUrls.tutorWithdrawApiUrl
export const tutorWithdrawApi = (token: String | null) => {
  const response = axios.put(
    `${tutorApiUrls.tutorWithdrawApiUrl}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response;
}
