import style from './ScheduleHeader.module.scss';
import { MWToggler } from '../mwToggler/MWToggler';
import { mwState, monthState } from '../../../atoms';
import { useRecoilValue } from 'recoil';

export const ScheduleHeader: React.FC = () => {
  // 오늘이 몇주차인지 구하기
  const getWeek = () => {
    const date = new Date();
    const currentDate = date.getDate();
    const firstDay = new Date(date.setDate(1)).getDay();

    return Math.ceil((currentDate + firstDay) / 7);
  };
  const W = getWeek();
  // 달
  const month = useRecoilValue(monthState);
  // 달인지 주인지
  const mw = useRecoilValue(mwState);
  return (
    <>
      <div className={style.headerWrapper}>
        {/* 월 또는 월+주 표시 */}
        {mw === 'W' ? (
          <div className={style.currentMW}>
            {month}월 {W}주차
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
