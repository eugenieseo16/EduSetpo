// import { todayState } from '../../../atoms';
// import { useRecoilValue } from 'recoil';
import style from './WeekCalendar.module.scss';
import { Days } from '../days/Days';

export const WeekCalendar: React.FC = () => {
  // const today = useRecoilValue(todayState);
  let times: number[] = [];
  for (let i = 6; i < 25; i++) {
    times.push(i);
  }

  return (
    <>
      <div className={style.calendarWrapper}>
        <div className={style.daysWrapper}>
          <Days />
        </div>
        <div className={style.timeScheduleWrapper}>
          <div className={style.timesWrapper}>
            {times.map(time => (
              <div key={time} className={style.timeWrapper}>
                {time < 10 ? '0' + time : time}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
