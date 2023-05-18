import { childrenApiUrls } from './apiUrls';
import axios from 'axios';
import { ChildrenDto } from '../types/types';

// GET

// 부모 별 자식 조회
// parent/children/parentId
export const readChildrenApi = async (parentId: number) => {
  const response = await axios.get(
    `${childrenApiUrls.ChildrenApiUrl}/parentId`,
    {
      params: { parentId },
    }
  );
  return response;
};

//Delete
export const deleteChildApi = async (childId: number) => {
  const response = await axios.delete(
    `${childrenApiUrls.ChildrenApiUrl}/${childId}`
  );
  return response;
};

//Post
export const addChildApi = async (childData: ChildrenDto) => {
  const response = await axios.post(
    `https://www.edusetpo.com/api/parent/children`,
    // `${childrenApiUrls.ChildrenApiUrl}`,
    childData
  );
  return response;
};
