import { useEffect, useState } from 'react';
import { readSessionListByDateApi } from '../../../api/sessionApis';
import style from './TodayClasses.module.css';
import { colorTheme } from '../../../utils/colorThemeDataList';
import { useNavigate } from 'react-router-dom';
import { Tag } from '../../common/tag/Tag';
import { NoClass } from '..';
import { tutorInfoState } from '../../../atoms/user.atom';
import { useRecoilState } from 'recoil';

interface Schedule {
  startTime: number[];
  endTime: number[];
  studentList: [];
}

export const TodayClasses = () => {
  const [userInfo, setUserInfo] = useRecoilState(tutorInfoState);

  const navigate = useNavigate();
  const themeIdx = userInfo.themeIndex;

  const currentDate = new Date();
  const YYYY = currentDate.getFullYear();
  const MM = '0' + (currentDate.getMonth() + 1).toString();
  const DD = '0' + currentDate.getDate().toString();
  const date = `${YYYY}-${MM.slice(-2)}-${DD.slice(-2)}`;

  const [data, setData] = useState<Schedule[]>([]);

  const [isScheduled, setIsScheduled] = useState(true);

  async function fetchData() {
    try {
      const data = (await readSessionListByDateApi(date)).data.responseData;

      if (data.length == 0) {
        setIsScheduled(false);
      } else {
        setIsScheduled(true);
      }
      setData(data);
    } catch (error) {
      setIsScheduled(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isScheduled ? (
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
              onClick={() => navigate(`/tutor/session/${schedule.sessionId}`)}
            >
              <div className={style.classContent}>
                <h3>{schedule.lesson.lessonName}</h3>

                <div className={style.tagContainer}>
                  {schedule?.findTagsDtoList.map((tag: any, i: number) => (
                    <div key={i}>
                      <Tag name={tag.tag.tag} idx={tag.tagId % 10} />
                    </div>
                  ))}
                </div>

                <div>
                  {schedule.startTime[0].toString().length == 1 ? (
                    <span>0{schedule.startTime[0]}:</span>
                  ) : (
                    <span>{schedule.startTime[0]}:</span>
                  )}
                  {schedule.startTime[1].toString().length == 1 ? (
                    <span>0{schedule.startTime[1]} ~ </span>
                  ) : (
                    <span>{schedule.startTime[1]} ~ </span>
                  )}
                  {schedule.endTime[0].toString().length == 1 ? (
                    <span>0{schedule.endTime[0]}:</span>
                  ) : (
                    <span>{schedule.endTime[0]}:</span>
                  )}
                  {schedule.endTime[1].toString().length == 1 ? (
                    <span>0{schedule.endTime[1]} </span>
                  ) : (
                    <span>{schedule.endTime[1]} </span>
                  )}
                  <span>({schedule.duration}분)</span>
                </div>

                <div className={style.studentContainer}>
                  <p>수강 학생:⠀</p>
                  {schedule?.studentList.map((student: any, i: number) => (
                    <div key={i}>
                      <span>{student.studentName}⠀</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoClass />
      )}
    </>
  );
};
