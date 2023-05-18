import React, { useEffect, useState } from 'react';
import { GetGrades } from '../.././api/gradeApis';
import { useParams, useLocation } from 'react-router-dom';

export const ChartDetail: React.FC = () => {
  const params = useParams();
  const studentLessonId = params.studentLessonId;
  const location = useLocation();
  const childName = location.state?.childName;

  const [grades, setGrades] = useState<
    {
      gradeId: number;
      categoryId: number;
      examDate: string;
      examTitle: string;
      score: number;
      studentSessionId: number;
    }[]
  >([]);

  useEffect(() => {
    if (studentLessonId) {
      const id = Number(studentLessonId);
      const gradesData = GetGrades(id);
      setGrades(gradesData);
    }
  }, [studentLessonId]);

  return (
    <div>
      <h1>통계 상세 페이지</h1>
      <p>
        현재 보고 있는 학생은 {studentLessonId}번 학생 {childName}입니다.
      </p>
    </div>
  );
};

export default ChartDetail;
