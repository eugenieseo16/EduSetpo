import { LongButton } from '../../components/common/button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { StudentDetailHeader } from '../../components/studentDetail/1.studentDetailHeader/StudentDetailHeader';
import { StudentDetailCourse } from '../../components/studentDetail/2.studentDetailCourse/StudentDetailCourse';
import { StudentDetailContact } from '../../components/studentDetail/3.studentDetailContact/StudentDetailContact';
import style from './StudentDetail.module.scss';
import { StudentLessonList } from './../../types/student.d';
import { useState, useEffect } from 'react';
import { readStudentApi, GetStudentLessonList } from '../../api/studentApis';

export const StudentDetail = () => {
  const navigate = useNavigate();
  const [studentInfo, setStudentInfo] = useState<any>();
  const location = useLocation();
  const studentId = location.pathname.split('/')[3];
  const [studentLessonList, setStudentLessonList] =
    useState<StudentLessonList[]>();

  // 학생 아이디로 수업 목록 가져오기

  const fetchStudentLessonList = async () => {
    try {
      const result = await GetStudentLessonList(studentId);
      console.log(result.data.responseData);
      setStudentLessonList(result.data.responseData);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(studentLessonList);

  async function test() {
    try {
      const result = await readStudentApi(studentId);
      setStudentInfo(result.data.responseData);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  }
  const onClickList = () => {
    navigate(`../student/list`);
  };

  useEffect(() => {
    test();
    fetchStudentLessonList();
  }, []);

  console.log(studentInfo);
  const onClickGrade = () => {
    navigate('grade');
  };

  return (
    <div>
      <StudentDetailHeader studentInfo={studentInfo} />
      <StudentDetailContact studentInfo={studentInfo} />
      <StudentDetailCourse studentLessonList={studentLessonList} />
      <LongButton className={style.longButton} variant="success">
        인증코드 SMS 보내기
      </LongButton>
      <LongButton onClick={onClickList}>학생리스트로</LongButton>
    </div>
  );
};
