import style from './ClassCard.module.scss';
import { Tag } from '../common/tag/Tag';
import { colorTheme } from '../../utils/colorThemeDataList';
import { readLessonApi } from '../../api/lessonApis';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ClassCard = () => {
  const navigate = useNavigate();

  const themeIdx = 7;

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

  console.log(data[0]);

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
          onClick={() =>
            navigate(`/tutor/class/${data.lessonId}`, {
              state: { classId: data.lessonId },
            })
          }
        >
          <div className={style.infoContainer}>
            <h1>{data.lessonName}</h1>
            <p>: {data.memo}</p>

            {data?.tags.map((tag: any, i: number) => (
              <div key={i} className={style.tagContainer}>
                <Tag name={tag.tag} idx={tag.tagId % 10} />
              </div>
            ))}

            <div className={style.scheduleContainer}>
              {data?.schedule.map((timeSchedule: any, i: number) => (
                <div key={i} className={style.scheduleItem}>
                  {timeSchedule.day === 'MONDAY' ? (
                    <span>월</span>
                  ) : timeSchedule.day === 'TUESDAY' ? (
                    <span>화</span>
                  ) : timeSchedule.day === 'WEDNESDAY' ? (
                    <span>수</span>
                  ) : timeSchedule.day == 'THURSDAY' ? (
                    <span>목</span>
                  ) : timeSchedule.day == 'FRIDAY' ? (
                    <span>금</span>
                  ) : timeSchedule.day == 'SATURDAY' ? (
                    <span>토</span>
                  ) : timeSchedule.day == 'SUNDAY' ? (
                    <span>일</span>
                  ) : null}

                  {timeSchedule.startTime[1] == 0 &&
                  timeSchedule.endTime[1] == 0 ? (
                    <span>
                      {timeSchedule.startTime[0]}:00 ~ {timeSchedule.endTime[0]}
                      :00
                    </span>
                  ) : timeSchedule.startTime[1] == 0 ? (
                    <span>
                      {timeSchedule.startTime[0]}:00 ~ {timeSchedule.endTime[0]}
                      :{timeSchedule.endTime[1]}
                    </span>
                  ) : timeSchedule.endTime[1] == 0 ? (
                    <span>
                      {timeSchedule.startTime[0]}:{timeSchedule.startTime[1]} ~{' '}
                      {timeSchedule.endTime[0]}:00
                    </span>
                  ) : (
                    <span>
                      {timeSchedule.startTime[0]}:{timeSchedule.startTime[1]} ~{' '}
                      {timeSchedule.endTime[0]}:{timeSchedule.endTime[1]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={style.studentContainer}>
            <h6>수강학생: </h6>
            {data?.students.map((student: any, i: number) => (
              <span key={i}>{student.studentName}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
