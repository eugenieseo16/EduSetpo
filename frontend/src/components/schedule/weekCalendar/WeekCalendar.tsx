import { todayState } from '../../../atoms';
import { useRecoilValue } from 'recoil';
import style from './WeekCalendar.module.scss';
import { Days } from '../days/Days';

export const WeekCalendar: React.FC = () => {
  const today = useRecoilValue(todayState);

  return (
    <>
      <div className={style.calendarWrapper}>
        <Days />
        <p>{today.getFullYear()}</p>
        <p>{today.getMonth() + 1}</p>
        <p>{today.getDate()}</p>
        <p>{today.getDay()}</p>
      </div>
    </>
  );
};
