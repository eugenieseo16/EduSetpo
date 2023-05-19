import ParentsHeader from '../../components/common/parentsHeader/ParentsHeader';
import { TbChartHistogram } from 'react-icons/tb';
import styles from './ChartDetail.module.scss';
import { GetGrades } from '../../api/gradeApis';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { readStudentLessonApi } from '../../api/studentApis';
// import { Graph } from '../../components/common/graph/Graph';
import { StudentDetailGrade } from '../../components/studentDetail/grade/StudentDetailGrade';

type StudentLessonInfo = {
  studentId: number;
  tutorId: number;
  lessonId: number;
  lessonName: string;
  memo: string;
};

export const ChartDetail: React.FC = () => {
  const location = useLocation();
  const { studentName } = location.state;
  const { studentId, studentLessonId } = useParams();
  const [grade, setGrade] = useState<any[]>([]);
  const [studentLessonInfo, setStudentLessonInfo] = useState<StudentLessonInfo>(
    {
      studentId: 0,
      tutorId: 0,
      lessonId: 0,
      lessonName: '',
      memo: '',
    }
  );

  useEffect(() => {
    const fetchStudentLesson = async () => {
      try {
        const response = await readStudentLessonApi(Number(studentLessonId));

        const responseData = response.data.responseData;
        setStudentLessonInfo({
          studentId: responseData.student.studentId,
          tutorId: responseData.student.tutorId,
          lessonId: responseData.lessonId,
          lessonName: responseData.lesson.lessonName,
          memo: responseData.lesson.memo,
        });

        const gradeResponse = await GetGrades(Number(studentLessonId));
        setGrade(gradeResponse);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStudentLesson();
  }, []);

  return (
    <>
      <ParentsHeader
        mainTitle={
          <>
            <TbChartHistogram className={styles['title-icon']} />
            {`${studentName}`}
          </>
        }
      />
      <div className={styles['main-wrapper']}>
        <div
          className={styles['lesson-name']}
          onClick={() => console.log(studentLessonInfo)}
        >
          {studentLessonInfo.lessonName}
        </div>
        <div className={styles['grade']}>
          <StudentDetailGrade />
          {/* <Graph grades={grade} /> */}
        </div>
      </div>
    </>
  );
};
