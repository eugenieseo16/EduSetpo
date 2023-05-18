import styles from './ChildrenCard.module.scss';
import { colorTheme } from '../../utils/colorThemeDataList';
import { readStudentLessonApi } from '../../api/studentApis';
import { readLessonDetailApi } from '../../api/lessonApis';
import { useEffect, useState } from 'react';
import { tutorNameApi } from '../../api/tutorApis';

type ChildrenCardProps = {
  isWithdraw: boolean;
  childName: string;
  studentLessonId: number;
};

type StudentLessonInfo = {
  studentId: number;
  tutorId: number;
  lessonId: number;
  lessonName: string;
  memo: string;
};

type LessonDetailInfo = {
  schedule: {
    day: string;
    startTime: [number, number];
    endTime: [number, number];
  }[];
};

export const ChildrenCard: React.FC<ChildrenCardProps> = ({
  childName,
  studentLessonId,
}) => {
  const [studentLessonInfo, setStudentLessonInfo] = useState<StudentLessonInfo>(
    {
      studentId: 0,
      tutorId: 0,
      lessonId: 0,
      lessonName: '',
      memo: '',
    }
  );

  const [lessonDetailInfo, setLessonDetailInfo] = useState<LessonDetailInfo>({
    schedule: [],
  });

  const [tutorName, setTutorName] = useState<string>('');

  useEffect(() => {
    const fetchStudentLesson = async () => {
      try {
        const response = await readStudentLessonApi(studentLessonId);

        const responseData = response.data.responseData;
        setStudentLessonInfo({
          studentId: responseData.student.studentId,
          tutorId: responseData.student.tutorId,
          lessonId: responseData.lessonId,
          lessonName: responseData.lesson.lessonName,
          memo: responseData.lesson.memo,
        });

        // Additional API call to fetch lesson detail
        const detailResponse = await readLessonDetailApi(
          responseData.student.tutorId,
          responseData.lessonId
        );
        const detailResponseData = detailResponse;
        setLessonDetailInfo({
          schedule: detailResponseData.schedule,
        });

        const tutorResponse = await tutorNameApi(responseData.student.tutorId);
        setTutorName(tutorResponse.data.data.name);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentLesson();
  }, [studentLessonId]);
  const colorIdx = studentLessonInfo.studentId % 7;
  return (
    <>
      <div
        className={styles['child-card']}
        style={{
          backgroundColor: `${colorTheme[2]['color'][colorIdx]}`,
        }}
      >
        <div className={styles['title-row']}>
          <h2>{childName}</h2>
          <h3>{studentLessonInfo.lessonName}</h3>
        </div>
        <div className={styles['schedule-container']}>
          {lessonDetailInfo.schedule.map((scheduleItem, index) => {
            const dayString =
              scheduleItem.day === 'MONDAY'
                ? '월'
                : scheduleItem.day === 'TUESDAY'
                ? '화'
                : scheduleItem.day === 'WEDNESDAY'
                ? '수'
                : scheduleItem.day === 'THURSDAY'
                ? '목'
                : scheduleItem.day === 'FRIDAY'
                ? '금'
                : scheduleItem.day === 'SATURDAY'
                ? '토'
                : scheduleItem.day === 'SUNDAY'
                ? '일'
                : null;

            const timeString =
              scheduleItem.startTime[1] === 0 && scheduleItem.endTime[1] === 0
                ? `${scheduleItem.startTime[0]}:00 ~ ${scheduleItem.endTime[0]}:00`
                : scheduleItem.startTime[1] === 0
                ? `${scheduleItem.startTime[0]}:00 ~ ${scheduleItem.endTime[0]}:${scheduleItem.endTime[1]}`
                : scheduleItem.endTime[1] === 0
                ? `${scheduleItem.startTime[0]}:${scheduleItem.startTime[1]} ~ ${scheduleItem.endTime[0]}:00`
                : `${scheduleItem.startTime[0]}:${scheduleItem.startTime[1]} ~ ${scheduleItem.endTime[0]}:${scheduleItem.endTime[1]}`;

            return (
              <p className={styles['schedule-item']} key={index}>
                {dayString} {timeString} |
              </p>
            );
          })}
        </div>
        <div className={styles['memo-container']}>
          <p>{studentLessonInfo.memo}</p>
        </div>
        <div className={`${styles['tutor-name']} `} style={{ display: 'flex' }}>
          <span>강사:</span>
          <span>{tutorName}</span>
        </div>
      </div>
    </>
  );
};
