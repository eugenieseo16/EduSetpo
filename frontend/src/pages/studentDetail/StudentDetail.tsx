import {
  LongButton,
  ShortButtonHug,
} from '../../components/common/button/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
  const [studentInfo, setStudentInfo] = useState<Student>({
    isActive: false,
    parentContact: '',
    studentContact: '',
    studentName: '널값',
  });
  const studentId = useParams<{ studentId: string }>();

  async function test() {
    try {
      const result = await readStudentApi(studentId.studentId);
      setStudentInfo(result.data.responseData);
    } catch (err) {
      console.log(err);
    }
  }
  const onClickList = () => {
    navigate(`../student/list`);
  };
  useEffect(() => {
    test();
  }, []);

  const onClickGrade = () => {
    navigate('grade');
  };

  // console.log(studentInfo);
  return (
    <div>
      <StudentDetailHeader studentInfo={studentInfo} />
      <StudentDetailCourse studentId={studentId.studentId} />
      <StudentDetailContact studentInfo={studentInfo} />
      <h2 className={style.column}>성적</h2>
      <StudentDetailGrade />
      <LongButton className={style.longButton} variant="success">
        인증코드 SMS 보내기
      </LongButton>
      <LongButton onClick={onClickList}>학생리스트로</LongButton>
    </div>
  );
};
