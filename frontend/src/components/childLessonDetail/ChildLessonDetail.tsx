import { useEffect, useState } from 'react';
import { readStudentLessonApi } from '../../api/studentApis';
import { readLessonDetailApi } from '../../api/lessonApis';
import { tutorNameApi } from '../../api/tutorApis';
import styles from './ChildLessonDetail.module.scss';
import { colorTheme } from '../../utils/colorThemeDataList';

interface ChildLessonDetailProps {
  studentLessonId: number;
}

type StudentLessonInfo = {
  studentId: number;
  tutorId: number;
  lessonId: number;
  lessonName: string;
};

type LessonDetailInfo = {
  schedule: {
    day: string;
    startTime: [number, number];
    endTime: [number, number];
  }[];
};

export const ChildLessonDetail: React.FC<ChildLessonDetailProps> = ({
  studentLessonId,
}) => {
  const [studentLessonInfo, setStudentLessonInfo] = useState<StudentLessonInfo>(
    {
      studentId: 0,
      tutorId: 0,
      lessonId: 0,
      lessonName: '',
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

  return (
    <>
      <div className={styles['child-lesson-container']}>
        <h2 className={styles.title}>{studentLessonInfo.lessonName}</h2>

        <div className={styles['detail-container']}>
          <p>강사 : {tutorName}</p>

          <p>시간 :</p>
          <div>
            {lessonDetailInfo.schedule.map((item, index) => {
              const dayString =
                item.day === 'MONDAY'
                  ? '월'
                  : item.day === 'TUESDAY'
                  ? '화'
                  : item.day === 'WEDNESDAY'
                  ? '수'
                  : item.day === 'THURSDAY'
                  ? '목'
                  : item.day === 'FRIDAY'
                  ? '금'
                  : item.day === 'SATURDAY'
                  ? '토'
                  : item.day === 'SUNDAY'
                  ? '일'
                  : null;

              const timeString =
                item.startTime[1] === 0 && item.endTime[1] === 0
                  ? `${item.startTime[0]}:00 ~ ${item.endTime[0]}:00`
                  : item.startTime[1] === 0
                  ? `${item.startTime[0]}:00 ~ ${item.endTime[0]}:${item.endTime[1]}`
                  : item.endTime[1] === 0
                  ? `${item.startTime[0]}:${item.startTime[1]} ~ ${item.endTime[0]}:00`
                  : `${item.startTime[0]}:${item.startTime[1]} ~ ${item.endTime[0]}:${item.endTime[1]}`;
              const colorIdx =
                item.day === 'MONDAY'
                  ? 1
                  : item.day === 'TUESDAY'
                  ? 2
                  : item.day === 'WEDNESDAY'
                  ? 3
                  : item.day === 'THURSDAY'
                  ? 4
                  : item.day === 'FRIDAY'
                  ? 5
                  : item.day === 'SATURDAY'
                  ? 6
                  : item.day === 'SUNDAY'
                  ? 7
                  : 2;
              return (
                <p
                  key={index}
                  className={styles['schedule-item']}
                  style={{
                    backgroundColor: `${colorTheme[2]['color'][colorIdx]}`,
                  }}
                >
                  <div className={styles['schedule-item-text']}>
                    {dayString} : {timeString}
                  </div>
                </p>
              );
            })}
          </div>
          <p className={styles['bordered-container-title']}>과목 : </p>
          <div className={styles['bordered-container']}>
            <p className={styles['bordered-container-text']}>
              {studentLessonInfo.lessonName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
