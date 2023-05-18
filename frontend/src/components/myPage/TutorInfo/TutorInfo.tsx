import style from './TutorInfo.module.scss';
import { tutorInfoState } from '../../../atoms/user.atom';
import { useRecoilValue } from 'recoil';

export const TutorInfo: React.FC = () => {
  const userInfo = useRecoilValue(tutorInfoState);

  return (
    <div className={style.InfoBox}>
      <div className={style.TutorName}>{userInfo.nickname} 강사님</div>
      <div className={style.TutorMail}>{userInfo.email}</div>
    </div>
  );
};
