import { useEffect, useState } from 'react';
import { readTodayClassesSessionApi } from '../../../api/sessionApis';
import style from './TodayClasses.module.css';
import { colorTheme } from '../../../utils/colorThemeDataList';

interface Schedule {
  startTime: number[];
  endTime: number[];
}

export const TodayClasses = () => {
  const themeIdx = 7;

  const currentDate = new Date();
  const YYYY = currentDate.getFullYear();
  const MM = currentDate.getMonth() + 1;
  const DD = currentDate.getDate();

  const [data, setData] = useState<Schedule[]>([]);

  async function fetchData() {
    try {
      const data = await readTodayClassesSessionApi('2023-07-08');
      // const data = await readTodayClassesSessionApi(`${YYYY}-${MM}-${DD}`);
      console.log(data);
      setData(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((schedule: any, i: number) => (
        <div
          key={i}
          className={style.classItem}
          style={{
            backgroundColor: `${
              colorTheme[themeIdx]['color'][schedule.lesson.lessonId % 7]
            }`,
          }}
        >
          <h2>{schedule.lesson.lessonName}</h2>

          <p>
            {schedule.startTime[0]}:{schedule.startTime[1]}
          </p>
          <p>
            {schedule.endTime[0]}:{schedule.endTime[1]}
          </p>
          <p>{schedule.duration}분</p>
        </div>
      ))}
    </div>
  );
};
