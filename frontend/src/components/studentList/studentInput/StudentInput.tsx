import { Student } from '../../../types/student';
import style from './StudentInput.module.scss';
import { RiCloseCircleFill } from 'react-icons/ri';

interface StudentProps {
  isStudent: boolean;
  studentInfo: Student;
}

export const StudentInput: React.FC<StudentProps> = ({
  isStudent,
  studentInfo,
}) => {
  return (
    <div className={style.column}>
      <div>
        <div className={style.inputMsg}>
          {isStudent ? '학생 연락처' : '학부모 연락처'}
        </div>
        <div className={style.nickInput}>
          {isStudent ? studentInfo?.studentContact : studentInfo?.parentContact}{' '}
        </div>
      </div>
    </div>
  );
};
