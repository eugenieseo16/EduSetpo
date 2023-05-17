import { readStudentLessonListApi } from '../../../api/studentApis';
import { Student } from '../../../types/student';
import { LongButton, ShortButtonFixed } from '../../common/button/Button';
import style from './StudentDetailHeader.module.scss';
import { useState } from 'react';

interface StudentDetailHeaderProps {
  studentInfo: Student;
}

export const StudentDetailHeader = ({
  studentInfo,
}: StudentDetailHeaderProps) => {
  return (
    <div>
      <h1 className={style.column}>{studentInfo.studentName}</h1>
      <div className={style.row}>
        <LongButton variant="danger">비활성화</LongButton>
        <LongButton variant="primary">수정</LongButton>
      </div>
    </div>
  );
};
