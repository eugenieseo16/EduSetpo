import { useLocation } from 'react-router-dom';
import { TutorInfoBar } from '../../components/myPage/TutorInfoBar/TutorInfoBar';
import { TutorMenus } from '../../components/myPage/TutorMenus/TutorMenus';
import { ParentEdit } from '../parentEdit/ParentEdit';
import { LongButton } from '../../components/common/button/Button';
import { useNavigate } from 'react-router-dom';
import { tutorInfoState } from '../../atoms/user.atom';
import { useRecoilState } from 'recoil';

export const MyPage = () => {
  const location = useLocation().pathname.split('/')[1];
  const navigate = useNavigate();
  const [tutorInfo, setTutorInfo] = useRecoilState(tutorInfoState);
  // 로그아웃하고 메인화면으로 보내는 함수
  const handleLogout = () => {
    setTutorInfo(null);
    localStorage.removeItem('access_token');
    navigate('/');
  };

  return (
    <div>
      {location == 'tutor' ? (
        <>
          <TutorInfoBar />
          <TutorMenus />
          <LongButton variant="danger" onClick={handleLogout}>
            로그아웃
          </LongButton>
        </>
      ) : (
        <ParentEdit />
      )}
    </div>
  );
};
