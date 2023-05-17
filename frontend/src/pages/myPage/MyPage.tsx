import { useLocation } from 'react-router-dom';
import { TutorInfoBar } from '../../components/myPage/TutorInfoBar/TutorInfoBar';
import { TutorMenus } from '../../components/myPage/TutorMenus/TutorMenus';
import { ParentEdit } from '../parentEdit/ParentEdit';

export const MyPage = () => {
  const location = useLocation().pathname.split('/')[1];

  return (
    <div>
      {location == 'tutor' ? (
        <>
          <TutorInfoBar />
          <TutorMenus />
        </>
      ) : (
        <ParentEdit />
      )}
    </div>
  );
};
