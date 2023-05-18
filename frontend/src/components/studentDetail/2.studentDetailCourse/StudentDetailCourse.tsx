import { useState, useEffect } from 'react';
import { Tag } from '../../common/tag/Tag';
import style from './StudentDetailCourse.module.scss';
import { StudentLessonList } from '../../../types/student';
import { v4 as uuidv4 } from 'uuid';
import { StudentDetailGrade } from '../grade/StudentDetailGrade';

interface Props {
  studentLessonList: StudentLessonList[] | undefined;
}

export const StudentDetailCourse = ({ studentLessonList }: Props) => {
  const [selectedLesson, setSelectedLesson] = useState(-1);

  console.log(studentLessonList);

  // 수업 셀렉트 박스 기능
  const onLesson = (lessonId: number) => {
    console.log('??????????');
    setSelectedLesson(lessonId);
  };

  return (
    <>
      <h2 className={style.column}>수강 과목</h2>
      <div className={style.column}>
        {studentLessonList?.map(studentLesson => {
          if (studentLesson.studentLessonId === selectedLesson) {
            return (
              <div onClick={() => onLesson(studentLesson.studentLessonId)}>
                <Tag
                  name={studentLesson.lessonName}
                  idx={3}
                  key={uuidv4()}
                ></Tag>
              </div>
            );
          } else {
            return (
              <div onClick={() => onLesson(studentLesson.studentLessonId)}>
                <Tag
                  name={studentLesson.lessonName}
                  idx={1}
                  onClick={() => onLesson(studentLesson.studentLessonId)}
                  key={uuidv4()}
                ></Tag>
              </div>
            );
          }
        })}
      </div>

      {selectedLesson === -1 ? null : (
        <>
          <h2 className={style.column}>성적</h2>
          <StudentDetailGrade />
        </>
      )}
    </>
  );
};
