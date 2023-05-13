import style from './ClassManagement.module.scss';
import { ClassCard } from '../../../components/classManagement/ClassCard';

import { LongButton } from '../../../components/common/button/Button';
import { useNavigate } from 'react-router-dom';
import userAtom from '../../../atoms/userAtom';
import { useRecoilValue } from 'recoil';

export const ClassManagement = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  console.log(user);

  return (
    <div className={style.container}>
      <h1>수업 목록</h1>
      <ClassCard />

      <LongButton
        variant="success"
        className={style.longButton}
        onClick={() => navigate('create')}
      >
        수업 등록하기
      </LongButton>
    </div>
  );
};
