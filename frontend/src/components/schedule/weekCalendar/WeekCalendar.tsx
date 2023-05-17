import { weekState } from '../../../atoms';
import { useRecoilValue } from 'recoil';
import style from './WeekCalendar.module.scss';
import { Days } from '../days/Days';
import { useEffect, useState } from 'react';
import { readSessionByYearAndMonthApi } from '../../../api/sessionApis';

export const WeekCalendar: React.FC = () => {
  // 달력에 표시할 이번주에 대한 정보
  const week = useRecoilValue(weekState);
  // 강의 정보 담을 배열
  const [sessionMonths, setSessionMonths] = useState<any[]>([]);
  // weekState가 바뀔때마다 년, 월 받아오기
  useEffect(() => {
    // 달, 년 입력해서 받기
    async function fetchSessionMonth(
      monthOne: number,
      monthTwo: number,
      yearOne: number,
      yearTwo: number
    ) {
      // 달이 같으면 한번만 요청 보내기
      if (monthOne === monthTwo) {
        try {
          const data = await readSessionByYearAndMonthApi(yearOne, monthOne);
          setSessionMonths(data.data.responseData);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const dataOne = await readSessionByYearAndMonthApi(yearOne, monthOne);
          const dataTwo = await readSessionByYearAndMonthApi(yearTwo, monthTwo);
          const dataArr = [
            ...dataOne.data.responseData,
            ...dataTwo.data.responseData,
          ];
          setSessionMonths(dataArr);
        } catch (err) {
          console.log(err);
        }
      }
    }
    // 달이 들어오면 axios요청 보내기
    // 최초 렌더링 될때는 요청 안보내기 위해
    if (week.length != 0) {
      // 해당 주의 달, 년 받아오는 요청 보내기
      fetchSessionMonth(
        new Date(week[0]).getMonth() + 1,
        new Date(week[6]).getMonth() + 1,
        new Date(week[0]).getFullYear(),
        new Date(week[6]).getFullYear()
      );
    }
  }, [week]);

  // 6시부터 24시까지 표시하는 바
  let times: number[] = [];
  for (let i = 6; i < 25; i++) {
    times.push(i);
  }

  // 모눈 찍기 위한 숫자
  let allTimes: number[] = [];
  for (let i = 600; i < 2401; i += 50) {
    allTimes.push(i);
  }

  return (
    <>
      <div className={style.calendarWrapper}>
        <div
          className={style.daysWrapper}
          onClick={() => console.log(sessionMonths)}
        >
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
            {/* 요일마다 그리드로 밑으로 쭉 뻗기 */}
            {week.map(day => (
              <div key={day} className={style.weekDayWrapper}>
                {/* 쭉 뻗은데서 시간마다 모눈종이 그리기 */}
                {allTimes.map(time => (
                  <div
                    key={time}
                    className={
                      (time / 50) % 2 === 0 ? style.exactTime : style.halfTime
                    }
                  >
                    {/* 수업 그리기 대작전 */}
                    {/* {sessionMonths.map(session => (
                      9
                    ))} */}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
