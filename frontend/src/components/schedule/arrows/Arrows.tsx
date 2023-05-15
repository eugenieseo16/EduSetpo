import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import style from './Arrows.module.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { mwState, todayState, monthState, yearState } from '../../../atoms';

export const Arrows: React.FC = () => {
  const mw = useRecoilValue(mwState);
  const [today, setToday] = useRecoilState(todayState);
  const [month, setMonth] = useRecoilState(monthState);
  const [year, setYear] = useRecoilState(yearState);

  // 달 과거로 이동
  const handlePrevMonth = (): void => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  // 달 미래로 이동
  const handlePostMonth = (): void => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  // 주 과거로 이동 (날짜 - 7)
  const handlePrevWeek = (): void => {
    const newDate = new Date(today);
    newDate.setDate(newDate.getDate() - 7);
    setToday(newDate);
  };

  // 주 미래로 이동 (날짜 + 7)
  const handlePostWeek = (): void => {
    const newDate = new Date(today);
    newDate.setDate(newDate.getDate() + 7);
    setToday(newDate);
  };

  return (
    <>
      {mw === 'M' ? (
        <div className={style.arrowsWrapper}>
          <AiFillCaretLeft
            color="D9D9D9"
            size="2rem"
            onClick={handlePrevMonth}
          />
          <AiFillCaretRight
            color="D9D9D9"
            size="2rem"
            onClick={handlePostMonth}
          />
        </div>
      ) : (
        <div className={style.arrowsWrapper}>
          <AiFillCaretLeft
            color="D9D9D9"
            size="2rem"
            onClick={handlePrevWeek}
          />
          <AiFillCaretRight
            color="D9D9D9"
            size="2rem"
            onClick={handlePostWeek}
          />
        </div>
      )}
    </>
  );
};
