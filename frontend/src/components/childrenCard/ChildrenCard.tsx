import style from './ChildrenCard.module.scss';
import { colorTheme } from '../../utils/colorThemeDataList';
import { readStudentLessonApi } from '../../api/studentApis';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import React from 'react';

type ChildrenCardProps = {
  isWithdraw: boolean;
  childName: string;
  studentLessonId: number;
};

export const ChildrenCard: React.FC<ChildrenCardProps> = ({
  isWithdraw,
  childName,
  studentLessonId,
}) => {
  const [studentInfo, setStudentInfo] = useState<{
    studentId: number;
    tutorId: number;
    lessonId: number;
  }>({ studentId: 0, tutorId: 0, lessonId: 0 });

  useEffect(() => {
    const fetchStudentLesson = async () => {
      try {
        const response = await readStudentLessonApi(studentLessonId);
        const responseData = response.data.responseData;
        setStudentInfo({
          studentId: responseData.student.studentId,
          tutorId: responseData.student.tutorId,
          lessonId: responseData.lesson.lessonId,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentLesson();
  }, [studentLessonId]);

  return (
    <div>
      <h3>{childName}</h3>
      <p>Student ID: {studentInfo.studentId}</p>
      <p>Tutor ID: {studentInfo.tutorId}</p>
      <p>Lesson ID: {studentInfo.lessonId}</p>
    </div>
  );
};
