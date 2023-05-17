import { useEffect, useState } from 'react';
import style from './ClassInfo.module.scss';
import { readLessonDetailApi } from '../../api/lessonApis';
import { useLocation } from 'react-router-dom';
import { Tag } from '../common/tag/Tag';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tutorInfoState } from '../../atoms/user.atom';
import userAtom from '../../atoms/userAtom';
import { Session } from './Session';

export const ClassInfo = () => {
  const userInfo = useRecoilValue(tutorInfoState);
  const tutorId = userInfo.tutorId;

  const [data, setData] = useState({
    lessonId: 0,
    tutorId: 0,
    lessonName: '',
    tags: [{}],
    memo: '',
    students: [{}],
    schedule: [{ day: '', startTime: [0, 0], endTime: [0, 0] }],
  });
  const location = useLocation();

  const classId = location.pathname.split('/')[3];

  async function fetchData() {
    try {
      const data = await readLessonDetailApi(tutorId, classId);
      setData(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  const tags = data?.tags;
  const students = data?.students;
  const schedules = data?.schedule;

  return (
    <div>
      <div className={style.headerContainer}>
        <h1>{data.lessonName}</h1>
        <p>: {data.memo}</p>

        {tags.map((tag: any, i: number) => (
          <div key={i} className={style.tagContainer}>
            <Tag name={tag.tag} idx={tag.tagId % 10} />
          </div>
        ))}
      </div>

      <div className={style.scheduleContainer}>
        <h3>일정: </h3>
        {schedules.map((schedule: any, i: number) => (
          <div key={i} className={style.scheduleItem}>
            {schedule.day === 'MONDAY' ? (
              <span>월</span>
            ) : schedule.day === 'TUESDAY' ? (
              <span>화</span>
            ) : schedule.day === 'WEDNESDAY' ? (
              <span>수</span>
            ) : schedule.day == 'THURSDAY' ? (
              <span>목</span>
            ) : schedule.day == 'FRIDAY' ? (
              <span>금</span>
            ) : schedule.day == 'SATURDAY' ? (
              <span>토</span>
            ) : schedule.day == 'SUNDAY' ? (
              <span>일</span>
            ) : null}

            {schedule &&
            schedule.startTime[1] == 0 &&
            schedule.endTime[1] == 0 ? (
              <span>
                {schedule.startTime[0]}:00 ~ {schedule.endTime[0]}
                :00
              </span>
            ) : schedule.startTime[1] == 0 ? (
              <span>
                {schedule.startTime[0]}:00 ~ {schedule.endTime[0]}:
                {schedule.endTime[1]}
              </span>
            ) : schedule.endTime[1] == 0 ? (
              <span>
                {schedule.startTime[0]}:{schedule.startTime[1]} ~{' '}
                {schedule.endTime[0]}:00
              </span>
            ) : (
              <span>
                {schedule.startTime[0]}:{schedule.startTime[1]} ~{' '}
                {schedule.endTime[0]}:{schedule.endTime[1]}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className={style.studentContainer}>
        <h3>수강 학생: </h3>
        {students.map((student: any, i: number) => (
          <div key={i}>{student.studentName}</div>
        ))}
      </div>

      <Session lessonId={data.lessonId} />
    </div>
  );
};
