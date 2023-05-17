import style from './MonthCalendar.module.scss';
import { Days } from '../days/Days';
import { monthState, yearState } from '../../../atoms';
import { useRecoilValue } from 'recoil';
import { readSessionByYearAndMonthApi } from '../../../api/sessionApis';
import { useEffect, useState } from 'react';
import { colorTheme } from '../../../utils/colorThemeDataList';
import { tutorInfoState } from '../../../atoms/user.atom';

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
  const finalDays = [...prevMonthDays, ...days];

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
  finalDays.pop();
  // 여전히 전달 배열이 시간거꾸로 들어오는 문제
  return finalDays;
};

export const MonthCalendar: React.FC = () => {
  // 유저인포 저장
  const userInfo = useRecoilValue(tutorInfoState);
  const themeIdx = userInfo.themeIndex;

  const month = useRecoilValue(monthState);
  const year = useRecoilValue(yearState);

  // 이번 달력에 표시할 날짜들 넣은 배열
  const finalDays = daysArray(month - 1, year);

  // 이번달 강의 목록 받아오기
  const [sessionMonth, setSessionMonth] = useState<Array<any>>([]);
  async function fetchSessionMonth() {
    try {
      const data = await readSessionByYearAndMonthApi(year, month);
      setSessionMonth(data.data.responseData);
    } catch (err) {
      console.log(err);
    }
  }
  // 강의가 6개월 후 밖에 저장이 안됨 6개월후에는 정기일정 받아와서 넣기

  // month가 바뀔때마다 새로 해당 달의 session 받아오기
  useEffect(() => {
    fetchSessionMonth();
  }, [month]);

  return (
    <>
      <div
        className={style.calendarWrapper}
        onClick={() => console.log(sessionMonth)}
      >
        <Days />
        <div className={style.calendarGrid}>
          {finalDays.map((day, i) => (
            <div
              key={i}
              className={`${style.calendarDay} ${
                day.isCurrentMonth ? style.currentMonth : style.otherMonth
              } ${day.isToday ? style.today : ''} ${
                day.date.getDay() === 0
                  ? style.sunday
                  : day.date.getDay() === 6
                  ? style.satday
                  : ''
              }`}
            >
              {day.date.getDate()}
              <div className={style.sessionsWrapper}>
                {sessionMonth.map(session => {
                  // 달력에서 현재 날짜에 해당하는 수업들만 div return하기
                  if (
                    day.date.getTime() ===
                    new Date(
                      session.actualDate[0],
                      session.actualDate[1] - 1,
                      session.actualDate[2]
                    ).getTime()
                  )
                    return (
                      <div
                        key={session.sessionId}
                        className={style.sessionWrapper}
                        style={{
                          backgroundColor: `${
                            colorTheme[themeIdx]['color'][
                              session.lesson.lessonId % 7
                            ]
                          }`,
                        }}
                      >
                        {session.lesson.lessonName}
                      </div>
                    );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
