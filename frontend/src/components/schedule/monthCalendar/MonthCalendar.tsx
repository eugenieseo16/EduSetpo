import style from './MonthCalendar.module.scss';
import { Days } from '../days/Days';
import { monthState, yearState } from '../../../atoms';
import { useRecoilValue } from 'recoil';

interface Day {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
}

// 이번달 몇일까진지 체크
const daysInMonth = (month: number, year: number): number => {
  return new Date(year, month + 1, 0).getDate();
};
// 이번달 달력에 표시할 날짜들 받아오기
const daysArray = (month: number, year: number): Day[] => {
  const daysInMonthCount = daysInMonth(month, year);
  const days = [];

  for (let i = 1; i <= daysInMonthCount; i++) {
    const date = new Date(year, month, i);
    const isCurrentMonth = true;
    const isToday =
      date.getFullYear() === new Date().getFullYear() &&
      date.getMonth() === new Date().getMonth() &&
      date.getDate() === new Date().getDate();

    days.push({ date, isCurrentMonth, isToday });
  }
  // 전달 넣기
  const prevMonthDays = [];
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastMonthDaysCount = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  for (let i = lastMonthDaysCount; i >= 0; i--) {
    const date = new Date(year, month, -i);
    const isCurrentMonth = false;
    const isToday = false;

    prevMonthDays.push({ date, isCurrentMonth, isToday });
    // days.unshift({ date, isCurrentMonth, isToday });
  }
  const finalDays = [
    ...prevMonthDays,
    ...days
  ]

  // 다음달 넣기
  const lastDayOfMonth = new Date(year, month, daysInMonthCount).getDay();
  const nextMonthDaysCount = lastDayOfMonth === 0 ? 0 : 7 - lastDayOfMonth;

  for (let i = 1; i <= nextMonthDaysCount; i++) {
    const date = new Date(year, month + 1, i);
    const isCurrentMonth = false;
    const isToday = false;

    finalDays.push({ date, isCurrentMonth, isToday });
    // days.push({ date, isCurrentMonth, isToday });
  }
  // 배열에 마지막에 다음주 일요일이 들어와서 그거 자르기
  finalDays.pop()
  // 여전히 전달 배열이 시간거꾸로 들어오는 문제
  return finalDays;
};


export const MonthCalendar: React.FC = () => {
  const month = useRecoilValue(monthState);
  const year = useRecoilValue(yearState);

  // 이번 달력에 표시할 날짜들 넣은 배열
  const finalDays = daysArray(month - 1, year);

  return (
    <>
      <div className={style.calendarWrapper}>
        <Days />
        <div className={style.calendarGrid}>
          {finalDays.map((day, i) => (
            <div
              key={i}
              className={`${style.calendarDay} ${day.isCurrentMonth ? 'currentMonth' : 'otherMonth'} ${day.isToday ? 'today' : ''}`}
            >
              {day.date.getDate()}
            </div>
          ))}
        </div>
        {/* <div onClick={() => console.log(finalDays)}>
          테스트
        </div> */}
        {/* <MonthBody /> */}
      </div>
    </>
  );
};
