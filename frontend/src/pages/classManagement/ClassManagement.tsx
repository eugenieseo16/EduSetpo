import style from './ClassManagement.module.scss';
import { Tag } from '../../components/common/tag/Tag';
import { ClassCard } from '../../components/classManagement/ClassCard';

export const ClassManagement = () => {
  return (
    <div className={style.container}>
      <h1>수업 목록</h1>
      <ClassCard />
    </div>
  );
};
