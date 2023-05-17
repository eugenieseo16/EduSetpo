import style from './ClassDetail.module.scss';
import { Tag } from '../../../components/common/tag/Tag';
import {
  LongButton,
  ShortButtonHug,
} from '../../../components/common/button/Button';
import { ClassInfo } from '../../../components/classDetail/ClassInfo';
import { useLocation, useNavigate } from 'react-router-dom';

export const ClassDetail = () => {
  const navigate = useNavigate();
  const classId = useLocation().pathname.split('/')[3];

  return (
    <div>
      <ClassInfo />

      <LongButton onClick={() => navigate(`/tutor/class/update/${classId}`)}>
        수정
      </LongButton>
    </div>
  );
};
