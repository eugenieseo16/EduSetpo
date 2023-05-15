import style from './ScheduleHeader.module.scss';
import { MWToggler } from '../mwToggler/MWToggler';
import { mwState, todayState, monthState } from '../../../atoms';
import { useRecoilValue } from 'recoil';

export const ScheduleHeader: React.FC = () => {
  // 달인지 주인지
  const mw = useRecoilValue(mwState);
  // 오늘날짜
  const today = useRecoilValue(todayState);
  const todayMonth = today.getMonth() + 1;
  // 달
  const month = useRecoilValue(monthState);
  // 오늘이 몇주차인지 구하기
  const getWeek = () => {
    // const date = new Date();
    const currentDate = today.getDate();
    // 주차 계산을 위한 지표들 (첫 날짜, 첫 요일, 첫 토요일 날짜)
    const firstDate = new Date(today.setDate(1));
    const firstDay = firstDate.getDay();
    const satDate = new Date(
      firstDate.setDate(firstDate.getDate() + ((6 - firstDay + 7) % 7))
    ).getDate();
    // 마지막주인지 확인하기 위해 다음주 일요일 정보 넣기
    const nextSunday = new Date();
    nextSunday.setDate(today.getDate() + ((0 - today.getDay() + 7) % 7));
    // 마지막주 목요일이 어느달에 포함되는지 확인하기
    const thisThuday = new Date();
    thisThuday.setDate(today.getDate() + ((4 - today.getDay() + 7) % 7));

    // 첫주차에 목요일이 포함된 경우
    if (firstDay <= 4) {
      // 마지막 주차인 경우
      if (nextSunday.getMonth() != today.getMonth()) {
        // 이번주 목요일이 이번달인 경우
        if (thisThuday.getMonth() === today.getMonth()) {
          return Math.ceil((currentDate - satDate) / 7);
        } else {
          // 이번주 목요일이 다음달인 경우
          return 1;
        }
      } else {
        // 마지막 주차가 아닌 경우
        return Math.ceil((currentDate + (7 - satDate)) / 7);
      }
    } else {
      // 금, 토에 주가 시작하는 경우 금, 토는 0주차
      if (currentDate <= satDate) {
        return 0;
      } else {
        // 마지막 주차인 경우 (다음주 일요일의 달과 이번주 달이 다르다면)
        if (nextSunday.getMonth() != today.getMonth()) {
          // 이번주 목요일이 이번달인 경우(달 그대로하기)
          if (thisThuday.getMonth() === today.getMonth()) {
            return Math.ceil((currentDate - satDate) / 7);
          } else {
            // 이번주 목요일이 다음달이라면 달을 + 1 해주고 1주차 리턴
            return 1;
          }
        } else {
          // 마지막 주차가 아닌 경우
          return Math.ceil((currentDate - satDate) / 7);
        }
      }
    }
  };
  const firstDay = new Date(new Date().setDate(1)).getDay();
  const W = getWeek();
  return (
    <>
      <div
        className={style.headerWrapper}
        onClick={() => console.log(firstDay)}
      >
        {/* 월 또는 월+주 표시 */}
        {mw === 'W' ? (
          <div className={style.currentMW}>
            {todayMonth}월 {W}주차
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
