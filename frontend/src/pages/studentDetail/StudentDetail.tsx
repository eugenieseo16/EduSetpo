import {
  LongButton,
  ShortButtonHug,
} from '../../components/common/button/Button';
import { useNavigate } from 'react-router-dom';
import { StudentDetailHeader } from '../../components/studentDetail/1.studentDetailHeader/StudentDetailHeader';
import { StudentDetailCourse } from '../../components/studentDetail/2.studentDetailCourse/StudentDetailCourse';
import { StudentDetailContact } from '../../components/studentDetail/3.studentDetailContact/StudentDetailContact';
import style from './StudentDetail.module.scss';
import { StudentDetailGrade } from '../../components/studentDetail/grade/StudentDetailGrade';
import { Student } from './../../types/student.d';
import { useState, useEffect } from 'react';
import { readStudentApi } from '../../api/studentApis';

export const StudentDetail = (studentId: any) => {
  const navigate = useNavigate();
  const [studentInfo, setStudentInfo] = useState<any>();

  async function test() {
    const result = await readStudentApi(1);
    setStudentInfo(result.data.responseData);
  }
  console.log(studentInfo);
  const onClickList = () => {
    studentId = 2;
    navigate(`../student/list`);
  };
  useEffect(() => {
    test();
  }, []);

  const onClickGrade = () => {
    navigate('grade');
  };
  return (
    <div>
      <StudentDetailHeader />
      <div>{studentInfo.studentName}</div>
      <StudentDetailCourse />
      <StudentDetailContact />
      <h2 className={style.column}>성적</h2>
      <StudentDetailGrade />
      <LongButton className={style.longButton} variant="success">
        인증코드 SMS 보내기
      </LongButton>
      <LongButton onClick={onClickList}>학생리스트로</LongButton>
    </div>
  );
};
