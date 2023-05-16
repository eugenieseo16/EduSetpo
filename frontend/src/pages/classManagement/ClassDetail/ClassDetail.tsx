import style from './ClassDetail.module.scss';
import { Tag } from '../../../components/common/tag/Tag';
import {
  LongButton,
  ShortButtonHug,
} from '../../../components/common/button/Button';
import { ClassInfo } from '../../../components/classDetail/ClassInfo';

export const ClassDetail = () => {
  return (
    <div>
      <ClassInfo />

      <LongButton>수정</LongButton>
    </div>
  );
};
