import style from './ClassDetail.module.scss';
import { Tag } from '../../../components/common/tag/Tag';
import { ShortButtonHug } from '../../../components/common/button/Button';

export const ClassDetail = () => {
  return (
    <div>
      <h1>영어-내신</h1>
      <div className={style.tagContainer}>
        <Tag name="세명중학교" idx={1} />
        <Tag name="중2" idx={2} />{' '}
      </div>

      <div className={style.scheduleContainer}>
        <h3>일정:</h3>
        <p>월, 목 15:00 ~ 17:00</p>
        <ShortButtonHug variant="primary">수정</ShortButtonHug>
      </div>

      <h6>수강 학생:</h6>
      <h3>강잼민</h3>
      <h3>이금쪽</h3>
    </div>
  );
};
