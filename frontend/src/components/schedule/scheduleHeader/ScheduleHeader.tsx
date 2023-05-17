import style from './ScheduleHeader.module.scss';
import { MWToggler } from '../mwToggler/MWToggler';
import { mwState, todayState, monthState } from '../../../atoms';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
32;

export const ScheduleHeader: React.FC = () => {
  // 달인지 주인지
  const mw = useRecoilValue(mwState);
  // 오늘날짜
  const today = useRecoilValue(todayState);
  const [todayMonth, setTodayMonth] = useState(today.getMonth() + 1);
  // 달
  const month = useRecoilValue(monthState);

  // 3일전 날짜주차(0~5까지)를 구하는 함수
  const getDbyWeek = () => {
    // 3일전 날짜 구하기
    const dayBeforeYesterday = new Date(today.setDate(today.getDate() - 3));
    // 주차 계산을 위한 지표들 (첫 날짜, 첫 요일, 첫 토요일 날짜)
    const firstDate = new Date(new Date(dayBeforeYesterday).setDate(1));
    const firstDay = firstDate.getDay();
    const satDate = new Date(
      firstDate.setDate(firstDate.getDate() + ((6 - firstDay + 7) % 7))
    ).getDate();
    // 1. 첫 수요일이 포함되어있지 않다면, 0주차가 존재한다면
    if (firstDay <= 3) {
      return Math.ceil((dayBeforeYesterday.getDate() - satDate) / 7) + 1;
    } else {
      // 1. 첫 수요일이 포함되어있다면, 1주차가 존재한다면\
      return Math.ceil((dayBeforeYesterday.getDate() - satDate) / 7);
    }
  };

  // 오늘이 몇주차인지 구하기
  const getWeek = () => {
    // 오늘 날짜
    const todayDate = today.getDate();
    // 오늘 달(경우에 따라 다르게 표시할 수 있음)
    // 리턴할 때 값 setTodayMonth를 이용해 값을 바꿔주는 식으로 활용
    const month = today.getMonth() + 1;
    // 주차 계산을 위한 지표들 (첫 날짜, 첫 요일, 첫 토요일 날짜)
    const firstDate = new Date(new Date(today).setDate(1));
    const firstDay = firstDate.getDay();
    const satDate = new Date(
      firstDate.setDate(firstDate.getDate() + ((6 - firstDay + 7) % 7))
    ).getDate();
    // 마지막주인지 확인하기 위해 다음주 일요일 정보 넣기
    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + ((0 - today.getDay() + 7) % 7));
    // 마지막주 수요일이 어느달에 포함되는지 확인하기
    const thisWedday = new Date(today);
    thisWedday.setDate(today.getDate() + ((3 - today.getDay() + 7) % 7));

    // 1. 첫주차가 1주차인 경우
    if (firstDay <= 3) {
      // console.log('첫주 1주차');
      // 2. 마지막 주차인 경우
      if (nextSunday.getMonth() != today.getMonth()) {
        // console.log('마지막 주차');
        // 3. 이번주 목요일이 이번달인 경우
        if (thisWedday.getMonth() === today.getMonth()) {
          // console.log('이번달 주차');
          setTodayMonth(month);
          return Math.ceil((todayDate - satDate) / 7) + 1;
        } else {
          // 3. 이번주 목요일이 다음달인 경우
          // 4. 12월 인경우에는 1월로 넘겨줘야함
          if (month === 12) {
            setTodayMonth(1);
          } else {
            setTodayMonth(month + 1);
          }
          return 1;
        }
      } else {
        // 2. 마지막 주차가 아닌 경우
        setTodayMonth(month);
        return Math.ceil((todayDate - satDate) / 7) + 1;
      }
    } else {
      // 1. 첫주차가 0주차인 경우
      // 1-1. 0주차 인경우
      // console.log('첫 주차 0주차');
      if (todayDate <= satDate) {
        // 4. 1월인 경우 12월로 넘겨주기
        // 저번달의 마지막 주차 구하기
        if (month === 1) {
          setTodayMonth(12);
        } else {
          setTodayMonth(month - 1);
        }
        const lastMonthWeek = getDbyWeek();
        return lastMonthWeek;
      } else {
        // 1-2. 0주차 아닌경우
        // 2. 마지막 주차인 경우 (다음주 일요일의 달과 이번주 달이 다르다면)
        if (nextSunday.getMonth() != today.getMonth()) {
          // console.log('마지막 주차');
          // 3. 이번주 목요일이 이번달인 경우(달 그대로하기)
          if (thisWedday.getMonth() === today.getMonth()) {
            // console.log('이번달의 주차 임');
            return Math.ceil((todayDate - satDate) / 7);
          } else {
            // 3. 이번주 목요일이 다음달이라면 달을 + 1 해주고 1주차 리턴
            // console.log('이번달의 주차 아님');
            if (month === 12) {
              setTodayMonth(1);
            } else {
              setTodayMonth(month + 1);
            }
            return 1;
          }
        } else {
          // 2. 마지막 주차가 아닌 경우
          // console.log('마지막 주차X');
          setTodayMonth(month);
          return Math.ceil((todayDate - satDate) / 7);
        }
      }
    }
  };

  const [w, setW] = useState(0);
  useEffect(() => {
    setW(getWeek());
  }, [today]);
  return (
    <>
      <div className={style.headerWrapper}>
        {/* 월 또는 월+주 표시 */}
        {mw === 'W' ? (
          <div className={style.currentMW}>
            {todayMonth}월 {w}주차
          </div>
        ) : (
          <div className={style.currentMW}>{month}월</div>
        )}
        {/* 주, 월 토글 */}
        <MWToggler />
      </div>
    </>
  );
};
