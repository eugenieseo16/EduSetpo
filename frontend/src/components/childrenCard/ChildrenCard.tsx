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
        console.log(response);
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
        const detailResponseData = detailResponse.data.responseData;
        setLessonDetailInfo({
          schedule: detailResponseData.schedule,
        });

        // Additional API call to fetch tutor name
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
    <div className={styles['styles.child-card']}>
      <h3 className={styles['styles.child-title']}>{childName}</h3>
      <p className={styles['styles.child-item']}>강사: {tutorName}</p>
      <p className={styles['styles.child-item']}>
        Lesson: {studentLessonInfo.lessonName}
      </p>
      <p className={styles['styles.child-item']}>
        Memo: {studentLessonInfo.memo}
      </p>
      <p className={styles['styles.child-item']}>Schedule:</p>
      {lessonDetailInfo.schedule.map((scheduleItem, index) => (
        <p className={styles['styles.child-item']} key={index}>
          Day: {scheduleItem.day}, Start Time:{' '}
          {scheduleItem.startTime.join(':')}, End Time:{' '}
          {scheduleItem.endTime.join(':')}
        </p>
      ))}
    </div>
  );
};
