import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import style from './Arrows.module.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { mwState, monthState, yearState } from '../../../atoms';

export const Arrows: React.FC = () => {
  const mw = useRecoilValue(mwState);
  const [month, setMonth] = useRecoilState(monthState);
  const [year, setYear] = useRecoilState(yearState);

  // 달 뒤로 이동
  const handlePrevMonth = (): void => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  // 달 앞으로 이동
  const handlePostMonth = (): void => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <>
      {mw === 'M' ? (
        <div className={style.arrowsWrapper}>
          <AiFillCaretLeft 
            color="D9D9D9" size="2rem"
            onClick={handlePrevMonth}  
          />
          <AiFillCaretRight 
            color="D9D9D9" size="2rem"
            onClick={handlePostMonth}
          />
        </div>
      ) : (
        <div className={style.arrowsWrapper}>
          <AiFillCaretLeft 
            color="FFFFFF" size="2rem"  
          />
          <AiFillCaretRight 
            color="FFFFFF" size="2rem" 
          />
        </div>
      )}
    </>
  );
};
