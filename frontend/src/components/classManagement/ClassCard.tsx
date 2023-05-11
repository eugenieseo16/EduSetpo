import style from './ClassCard.module.scss';
import { Tag } from '../common/tag/Tag';
import { colorTheme } from '../../utils/colorThemeDataList';

export const ClassCard = () => {
  const themeIdx = 7;
  const classId = 18;

  return (
    // <div className={style.classCard}>
    <div
      className={style.classCard}
      style={{
        backgroundColor: `${colorTheme[themeIdx]['color'][classId % 7]}`,
      }}
    >
      <div className={style.infoContainer}>
        <h1>수학II</h1>

        <div className={style.tagContainer}>
          <Tag name="세명중학교" idx={1} />
          <Tag name="중2" idx={2} />
        </div>

        <p>월, 목 15:00 ~ 17:00</p>
      </div>

      <div className={style.studentContainer}>
        <h6>수강학생: </h6>
        <p>김잼민, 서금쪽</p>
      </div>
    </div>
  );
};
