import { ShortButtonFixed } from '../../common/button/Button';
import style from './StudentDetailHeader.module.scss';

interface StudentDetailHeaderProps {
  studentName: string;
}

export const StudentDetailHeader = ({
  studentName,
}: StudentDetailHeaderProps) => {
  return (
    <div>
      <h1 className={style.column}>{studentName}</h1>
      <div className={style.row}>
        <ShortButtonFixed variant="danger">비활성화</ShortButtonFixed>
        <ShortButtonFixed variant="primary">수정</ShortButtonFixed>
      </div>
    </div>
  );
};
