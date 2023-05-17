import { readStudentLessonListApi } from '../../../api/studentApis';
import { Tag } from '../../common/tag/Tag';
import style from './StudentDetailCourse.module.scss';
import { useState, useEffect } from 'react';

interface StudentDetailCourseProps {
  studentId: string;
}

export const StudentDetailCourse = (studentId: StudentDetailCourseProps) => {
  const [lessonInfo, setLessonInfo] = useState<any>();

  async function fetchData() {
    try {
      const result = (await readStudentLessonListApi(studentId.studentId)).data
        .responseData;
      setLessonInfo(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className={style.column}>수강 과목</h2>
      <div className={style.tagContainer}>
        {lessonInfo?.map((data: any, index: number) => (
          <Tag name={data.lessonName} idx={index}></Tag>
        ))}
      </div>
    </div>
  );
};
