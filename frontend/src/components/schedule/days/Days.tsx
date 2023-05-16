import style from './Days.module.scss';
import { mwState, todayState } from '../../../atoms';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';

export const Days: React.FC = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const mw = useRecoilValue(mwState);
  const today = useRecoilValue(todayState);
  // 주달력에서 사용할 '진짜 진짜' 오늘의 날짜 선언해두기
  const [weekBaseDay, setWeekBaseDay] = useState<Date>();
  useEffect(() => {
    setWeekBaseDay(new Date(today));
  }, []);
  // 오늘의 요일 구해서 해당 요일을 0 ~ 6 까지 만들어주면서 해당 날짜를 배열에 넣는다
  // 배열을 순회할때 해당 날짜도 포함해서 순회하면됨
  // 오늘 요일 구하기
  const todayDay = today.getDay();
  // 이번주 날짜들이 들어갈 배열 선언
  const [weekArr, setWWeekArr] = useState<Date[]>([]);
  // todayDay를 0부터 6까지 만드는 숫자들 모으기
  useEffect(() => {
    // 주 달력일 때만 작동하도록
    if (mw === 'W') {
      // 날짜 배열에 넣을 배열 선언
      let arr = [];
      for (let i = 0; i < 7; i++) {
        // 오늘보다 일요일부터 토요일까지 구하고
        const basedate = new Date(today);
        const theday = new Date(
          basedate.setDate(basedate.getDate() - (todayDay - i))
        );
        // 해당 요일 배엘에 밀어넣기
        arr.push(theday);
      }
      setWWeekArr(arr);
    }
  }, [today]);

  return (
    <>
      {mw === 'M' ? (
        // 월의 경우 날짜 없는 요일표시
        <div className={style.daysWrapper}>
          {days.map(day => {
            if (day === '일') {
              return (
                <div key={day} className={style.sundayDiv}>
                  {day}
                </div>
              );
            } else if (day === '토') {
              return (
                <div key={day} className={style.satdayDiv}>
                  {day}
                </div>
              );
            } else {
              return (
                <div key={day} className={style.dayDiv}>
                  {day}
                </div>
              );
            }
          })}
        </div>
      ) : (
        // 주의 경우 날짜 있는 요일표시
        <div className={style.daysWrapper}>
          {weekArr.map(day => {
            // 일요일의 경우
            if (day.getDay() === 0) {
              return (
                <div
                  key={day.getDay()}
                  className={
                    day.getTime() === weekBaseDay?.getTime()
                      ? style.todayDiv
                      : style.sundayDiv
                  }
                >
                  <div className={style.dateDiv}>
                    {day.getMonth() + 1}/{day.getDate()}
                  </div>
                  일
                </div>
              );
              // 월요일
            } else if (day.getDay() === 1) {
              return (
                <div
                  key={day.getDay()}
                  className={
                    day.getTime() === weekBaseDay?.getTime()
                      ? style.todayDiv
                      : style.dayDiv
                  }
                >
                  <div className={style.dateDiv}>
                    {day.getMonth() + 1}/{day.getDate()}
                  </div>
                  월
                </div>
              );
              // 화요일
            } else if (day.getDay() === 2) {
              return (
                <div
                  key={day.getDay()}
                  className={
                    day.getTime() === weekBaseDay?.getTime()
                      ? style.todayDiv
                      : style.dayDiv
                  }
                >
                  <div className={style.dateDiv}>
                    {day.getMonth() + 1}/{day.getDate()}
                  </div>
                  화
                </div>
              );
              // 수요일
            } else if (day.getDay() === 3) {
              return (
                <div
                  key={day.getDay()}
                  className={
                    day.getTime() === weekBaseDay?.getTime()
                      ? style.todayDiv
                      : style.dayDiv
                  }
                >
                  <div className={style.dateDiv}>
                    {day.getMonth() + 1}/{day.getDate()}
                  </div>
                  수
                </div>
              );
              // 목요일
            } else if (day.getDay() === 4) {
              return (
                <div
                  key={day.getDay()}
                  className={
                    day.getTime() === weekBaseDay?.getTime()
                      ? style.todayDiv
                      : style.dayDiv
                  }
                >
                  <div className={style.dateDiv}>
                    {day.getMonth() + 1}/{day.getDate()}
                  </div>
                  목
                </div>
              );
              // 금요일
            } else if (day.getDay() === 5) {
              return (
                <div
                  key={day.getDay()}
                  className={
                    day.getTime() === weekBaseDay?.getTime()
                      ? style.todayDiv
                      : style.dayDiv
                  }
                >
                  <div className={style.dateDiv}>
                    {day.getMonth() + 1}/{day.getDate()}
                  </div>
                  금
                </div>
              );
              // 토요일
            } else if (day.getDay() === 6) {
              return (
                <div
                  key={day.getDay()}
                  className={
                    day.getTime() === weekBaseDay?.getTime()
                      ? style.todayDiv
                      : style.satdayDiv
                  }
                >
                  <div className={style.dateDiv}>
                    {day.getMonth() + 1}/{day.getDate()}
                  </div>
                  토
                </div>
              );
            }
          })}
        </div>
      )}
    </>
  );
};
