import {
  LongButton,
  ShortButtonHug,
} from '../../components/common/button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { StudentDetailHeader } from '../../components/studentDetail/1.studentDetailHeader/StudentDetailHeader';
import { StudentDetailCourse } from '../../components/studentDetail/2.studentDetailCourse/StudentDetailCourse';
import { StudentDetailContact } from '../../components/studentDetail/3.studentDetailContact/StudentDetailContact';
import style from './StudentDetail.module.scss';
import { StudentDetailGrade } from '../../components/studentDetail/grade/StudentDetailGrade';
import { Student } from './../../types/student.d';
import { useState, useEffect } from 'react';
import { readStudentApi } from '../../api/studentApis';

export const StudentDetail = () => {
  const navigate = useNavigate();
  const [studentInfo, setStudentInfo] = useState<any>();
  const location = useLocation();
  const studentId = location.pathname.split('/')[3];

  async function test() {
    try {
      const result = await readStudentApi(studentId);
      console.log(result, '결괏값');
      setStudentInfo(result.data.responseData);
    } catch (err) {
      console.log(err);
    }
  }
  const onClickList = () => {
    navigate(`../student/list`);
  };
  useEffect(() => {
    console.log('키값', studentId);
    test();
  }, []);

  const onClickGrade = () => {
    navigate('grade');
  };
  return (
    <div>
      <StudentDetailHeader studentName={studentInfo?.studentName} />
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
