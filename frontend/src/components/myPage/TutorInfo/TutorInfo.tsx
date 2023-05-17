import style from './TutorInfo.module.scss';
import { tutorInfoState } from '../../../atoms/user.atom';
import { useRecoilState } from 'recoil';

export const TutorInfo: React.FC = () => {
  const [userInfo, setUserInfo] = useRecoilState(tutorInfoState);
  // const name = useState<string>("서유진");
  // const email = useState("dbwls@gmail.com");

  return (
    <div className={style.InfoBox} onClick={() => console.log(userInfo)}>
      <div className={style.TutorName}>서유진 강사님</div>
      <div className={style.TutorMail}>dbwls@gmail.com</div>
    </div>
  );
};
