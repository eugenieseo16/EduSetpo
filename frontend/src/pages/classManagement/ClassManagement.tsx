import style from './ClassManagement.module.scss';
import { Tag } from '../../components/common/tag/Tag';
import { ClassCard } from '../../components/classManagement/ClassCard';

import { LongButton } from '../../components/common/button/Button';

export const ClassManagement = () => {
  return (
    <div className={style.container}>
      <h1>수업 목록</h1>
      <ClassCard />

      <LongButton variant="success">수업 등록하기</LongButton>
    </div>
  );
};
