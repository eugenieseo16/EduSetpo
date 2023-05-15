import { atom } from 'recoil';

export const tutorInfoState = atom({
  key: 'tutorInfo',
  default: {
    tutorId: 0,
    tutorName: '',
    tutorNick: '',
  },
});

// 컴포넌트에서 가져다 쓸 때 아래처럼 쓰면 댐...
// const [userInfo, setUserInfo] = useRecoilState(userInfoState);
