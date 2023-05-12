import style from './Schedule.module.scss';
import { ScheduleHeader } from '../../components/schedule/scheduleHeader/ScheduleHeader';
import { Arrows } from '../../components/schedule/arrows/Arrows';
import { MonthCalendar } from '../../components/schedule/monthCalendar/MonthCalendar';
import { LongButton } from '../../components/common/button/Button';

export const Schedule: React.FC = () => {
  return (
    <>
      <div className={style.scheduleWrapper}>
        <ScheduleHeader />
        <Arrows />
        <MonthCalendar />
        <LongButton variant="success">일정 추가</LongButton>
      </div>
    </>
  );
};
