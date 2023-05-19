import { Student } from '../../../types/student';
import style from './StudentDetailContact.module.scss';

interface StudentDetailContactProps {
  studentInfo: Student;
}

export const StudentDetailContact = ({
  studentInfo,
}: StudentDetailContactProps) => {
  return (
    <div>
      <h2 className={style.column}>연락처</h2>
      <div className={style.content}>
        <div>학생</div>
        <div className={style.phoneNumber}>{studentInfo?.studentContact}</div>
        <div>학부모</div>
        <div className={style.phoneNumber}>{studentInfo?.parentContact}</div>
      </div>
    </div>
  );
};
