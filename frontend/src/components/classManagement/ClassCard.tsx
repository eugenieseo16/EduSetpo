import style from './ClassCard.module.scss';
import { Tag } from '../common/tag/Tag';
import { colorTheme } from '../../utils/colorThemeDataList';
import { readLessonApi } from '../../api/lessonApis';
import { useEffect, useState } from 'react';

export const ClassCard = () => {
  const themeIdx = 7;
  const classId = 18;

  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const data = await readLessonApi(1);
      setData(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {data?.map((data: any, i: number) => (
        <div
          key={i}
          className={style.classCard}
          style={{
            backgroundColor: `${
              colorTheme[themeIdx]['color'][data.lessonId % 7]
            }`,
          }}
        >
          <div className={style.infoContainer}>
            <h1>{data.lessonName}</h1>
            <p>{data.memo}</p>

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
      ))}
    </div>
  );
};
