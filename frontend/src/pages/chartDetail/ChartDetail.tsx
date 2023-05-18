import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { GetGrades } from '../.././api/gradeApis';

export const ChartDetail: React.FC = () => {
  // useParams 훅을 사용해 URL에서 studentLessonId 파라미터를 추출합니다.
  let { studentLessonId } = useParams<{ studentLessonId: string }>();

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
      <p>현재 보고 있는 학생의 ID는 {studentLessonId}입니다.</p>

      {/* <LineChart width={500} height={300} data={grades}>
        <Line type="monotone" dataKey="score" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="examTitle" />
        <YAxis />
        <Tooltip />
      </LineChart> */}
    </div>
  );
};

export default ChartDetail;
