import style from './ClassManagement.module.scss';
import { ClassCard } from '../../../components/classManagement/ClassCard';

import { LongButton } from '../../../components/common/button/Button';
import { useNavigate } from 'react-router-dom';
import userAtom from '../../../atoms/userAtom';
import { useRecoilValue } from 'recoil';

export const ClassManagement = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={style.header}>
        <h1>수업 목록</h1>
      </div>

      <div className={style.container}>
        <ClassCard />

        <LongButton
          variant="success"
          className={style.longButton}
          onClick={() => navigate('create')}
        >
          수업 등록하기
        </LongButton>
      </div>
    </div>
  );
};
