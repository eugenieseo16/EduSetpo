import { weekState } from '../../../atoms';
import { useRecoilValue } from 'recoil';
import style from './WeekCalendar.module.scss';
import { Days } from '../days/Days';
import { useEffect, useState } from 'react';
import { readSessionByYearAndMonthApi } from '../../../api/sessionApis';
import { tutorInfoState } from '../../../atoms/user.atom';
import { colorTheme } from '../../../utils/colorThemeDataList';

export const WeekCalendar: React.FC = () => {
  // 유저인포 저장
  const userInfo = useRecoilValue(tutorInfoState);
  const themeIdx = userInfo.themeIndex;

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
  for (let i = 600; i < 2451; i += 50) {
    allTimes.push(i);
  }

  // 문자열 시간으로 바꿔주는 함수
  const getSessionTime = (hour: number, minute: number): number => {
    // 0분이면 18, 0 => 1800
    if (minute === 0) {
      return Number(String(hour) + String(minute) + '0');
    } else {
      // 30분이면 18, 30 => 1850으로 바꿔줘야함
      return Number(String(hour) + String(minute + 20));
    }
  };

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
                    {/* {sessionMonths.map(session => {
                      return (
                        <div
                          className={style.sessionWrapper}
                          onClick={() => console.log(session)}
                        >
                          {session.actualDate[3]}
                        </div>
                      );
                    })} */}
                    {sessionMonths.map(session => {
                      // 월과 날짜가 같다면
                      if (
                        session.actualDate[1] ===
                          new Date(day).getMonth() + 1 &&
                        session.actualDate[2] === new Date(day).getDate()
                      ) {
                        // 시간을 받아서 문자열로 변환시키기 [6, 30] => "650" / [10, 0] => "1000"
                        const sessionTime =
                          String(session.startTime[0]) +
                          String(session.startTime[1] * (5 / 30) + '0');
                        // 세션 시작시간 구하기
                        const sessionStart = getSessionTime(
                          session.startTime[0],
                          session.startTime[1]
                        );
                        // 세션 끝시간 구하기
                        const sessionEnd = getSessionTime(
                          session.endTime[0],
                          session.endTime[1]
                        );
                        // 세션 길이 구하기
                        // 칸 넘어갈때마다 0.1rem씩 밀리는 현상있음
                        // 기본 div크기를 0.1씩 줄이기로 했음
                        const sessionLength =
                          ((sessionEnd - sessionStart) / 50) * 0.75;

                        if (String(time) === sessionTime) {
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
                                height: `${sessionLength}rem`,
                              }}
                              onClick={() => console.log(session)}
                            >
                              {session.lesson.lessonName}
                            </div>
                          );
                        }
                      }
                    })}
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
