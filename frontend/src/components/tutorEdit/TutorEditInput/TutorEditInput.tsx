import style from './TutorEditInput.module.scss';
import { RiCloseCircleFill } from 'react-icons/ri';
import { tutorInfoState } from '../../../atoms/user.atom';
import { useRecoilValue } from 'recoil';

export const TutorEditInput: React.FC = () => {
  const tutorInfo = useRecoilValue(tutorInfoState);
  const userName = tutorInfo.nickname;
  // const userName = '여덟글자닉네임임';
  const count = userName.length;

  return (
    <div
      className={style.nickInputWrapper}
      onClick={() => console.log(tutorInfo)}
    >
      <input className={style.nickInput} placeholder={userName} />
      <RiCloseCircleFill className={style.xBox} />
      <div className={style.inputMsg}>
        <div>닉네임을 입력하세요.</div>
        <div>{count}/8</div>
      </div>
    </div>
  );
};
