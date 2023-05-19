// ChildrenLessonDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { ChildLessonDetail } from '../../components/childLessonDetail/ChildLessonDetail';

interface StudentLessonIdParams {
  [key: string]: string;
  studentLessonId: string;
}

export const ChildrenLessonDetail: React.FC = () => {
  let { studentLessonId } = useParams<StudentLessonIdParams>();
  const parsedStudentLessonId = studentLessonId
    ? parseInt(studentLessonId)
    : undefined;

  return (
    <div>
      {parsedStudentLessonId && (
        <ChildLessonDetail studentLessonId={parsedStudentLessonId} />
      )}
    </div>
  );
};
