import { weekState } from '../../../atoms';
import { useRecoilValue } from 'recoil';
import style from './WeekCalendar.module.scss';
import { Days } from '../days/Days';

export const WeekCalendar: React.FC = () => {
  // 달력에 표시할 이번주에 대한 정보
  const week = useRecoilValue(weekState);
  // 6시부터 24시까지 표시하는 바
  let times: number[] = [];
  for (let i = 6; i < 25; i++) {
    times.push(i);
  }

  // 모눈 찍기위해 그리드 나누기
  let sevenDays: number[] = [];
  for (let i = 0; i < 7; i++) {
    sevenDays.push(i);
  }

  // 모눈 찍기 위한 숫자
  let allTimes: number[] = [];
  for (let i = 0; i < 38; i++) {
    allTimes.push(i);
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
          <div className={style.schedulesWrapper}>
            {week.map(day => (
              <div key={day} className={style.weekDayWrapper}>
                {allTimes.map(time => (
                  <div
                    key={time}
                    className={
                      time % 2 === 0 ? style.exactTime : style.halfTime
                    }
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
