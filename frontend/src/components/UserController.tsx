import { useSetRecoilState } from 'recoil';
import userAtom from '../atoms/userAtom';
import { useEffect } from 'react';
import axios from 'axios';

export const UserController = () => {
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    // const { data } = axios.post('https://www.edusetpo.com/api/member', {});
  });

  return <></>;
};
