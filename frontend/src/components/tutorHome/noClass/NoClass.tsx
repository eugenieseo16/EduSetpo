import sadeducell from '../../../assets/images/sadeducell.png';
import style from './NoClass.module.scss';

export const NoClass = () => {
  return (
    <div className={style.noClass}>
      <div className={style.noClassItem}>
        <img src={sadeducell} alt="no upcoming classes" />
        <p>오늘은 수업이 없어요</p>
      </div>
    </div>
  );
};
