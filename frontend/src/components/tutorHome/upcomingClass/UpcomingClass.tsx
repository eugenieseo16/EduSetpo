import { useNavigate } from 'react-router-dom';
import style from './UpcomingClass.module.scss';
import { useEffect, useState } from 'react';
import { NoClass } from '..';
import { readSessionListByDateApi } from '../../../api/sessionApis';
import { colorTheme } from '../../../utils/colorThemeDataList';
import { Tag } from '../../common/tag/Tag';

interface Schedule {
  actualDate: number[];
  duration: number;
  endTime: number[];
  findTagsDtoList: any[];
  isCompleted: boolean;
  lesson: {
    lessonId: number;
    tutorId: number;
    startDate: number[];
    endDate: number[] | null;
    lessonName: string;
  };
  memo: null | string;
  sessionId: number;
  startTime: number[];
  studentList: any[];
}

export const UpcomingClass = () => {
  const navigate = useNavigate();
  const themeIdx = 7;

  const currentDate = new Date();
  const YYYY = currentDate.getFullYear();
  const MM = '0' + (currentDate.getMonth() + 1).toString();
  const DD = '0' + currentDate.getDate().toString();
  const date = `${YYYY}-${MM.slice(-2)}-${DD.slice(-2)}`;

  const [isScheduled, setIsScheduled] = useState(true);

  const [data, setData] = useState<Schedule>();

  async function fetchData() {
    try {
      const temp = (await readSessionListByDateApi(date)).data.ResponseData;

      if (temp.length == 0) {
        setIsScheduled(false);
      } else {
        setIsScheduled(true);

        for (let i = 0; i < temp.length; i++) {
          const item = temp[i];

          const nowTime = new Date(
            `Tue May 16 2023 ${currentDate.getHours()}:${currentDate.getMinutes()}:00`
          );
          const compareTime = new Date(
            `Tue May 16 2023 ${item.endTime[0]}:${item.endTime[1]}:00`
          );

          if (compareTime > nowTime) {
            setData(temp[i]);
            break;
          }
        }
      }
    } catch (error) {
      setIsScheduled(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isScheduled && data?.lesson?.lessonId !== undefined ? (
        <div
          className={style.classItem}
          style={{
            backgroundColor: `${
              colorTheme[themeIdx]['color'][data?.lesson?.lessonId % 7]
            }`,
          }}
          onClick={() => navigate(`/tutor/session/${data?.sessionId}`)}
        >
          <div className={style.classContent}>
            <h3>{data?.lesson?.lessonName}</h3>

            <div className={style.tagContainer}>
              {data?.findTagsDtoList.map((tag: any, i: number) => (
                <div key={i}>
                  <Tag name={tag.tag.tag} idx={tag.tagId % 10} />
                </div>
              ))}
            </div>

            <div>
              {data.startTime[0].toString().length == 1 ? (
                <span>0{data.startTime[0]}:</span>
              ) : (
                <span>{data.startTime[0]}:</span>
              )}
              {data.startTime[1].toString().length == 1 ? (
                <span>0{data.startTime[1]} ~ </span>
              ) : (
                <span>{data.startTime[1]} ~ </span>
              )}
              {data.endTime[0].toString().length == 1 ? (
                <span>0{data.endTime[0]}:</span>
              ) : (
                <span>{data.endTime[0]}:</span>
              )}
              {data.endTime[1].toString().length == 1 ? (
                <span>0{data.endTime[1]} </span>
              ) : (
                <span>{data.endTime[1]} </span>
              )}
              <span>({data.duration}분)</span>
            </div>

            <div className={style.studentContainer}>
              <p>수강 학생:⠀</p>
              {data?.studentList.map((student: any, i: number) => (
                <div key={i}>
                  <span>{student.studentName}⠀</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <NoClass />
      )}
    </>
  );
};
