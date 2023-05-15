import style from './Schedule.module.scss';
import { ScheduleHeader } from '../../components/schedule/scheduleHeader/ScheduleHeader';
import { Arrows } from '../../components/schedule/arrows/Arrows';
import { MonthCalendar } from '../../components/schedule/monthCalendar/MonthCalendar';
// import { WeekCalendar } from '../../components/schedule/weekCalendar/WeekCalendar';
import { LongButton } from '../../components/common/button/Button';
import { mwState } from '../../atoms';
import { useRecoilValue } from 'recoil';

export const Schedule: React.FC = () => {
  const mw = useRecoilValue(mwState);

  return (
    <>
      <div className={style.scheduleWrapper}>
        <ScheduleHeader />
        <Arrows />
        {mw === 'M' ? <MonthCalendar /> : <MonthCalendar />}
        <LongButton variant="success">일정 추가</LongButton>
      </div>
    </>
  );
};
