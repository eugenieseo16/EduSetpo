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

export const StudentDetail = () => {
  const navigate = useNavigate();

  const onClickList = () => {
    navigate('../student');
  };

  const onClickGrade = () => {
    navigate('grade');
  };
  return (
    <div>
      <StudentDetailHeader />
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
