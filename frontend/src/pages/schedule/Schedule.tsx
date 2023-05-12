import style from './Schedule.module.scss';
import { ScheduleHeader } from '../../components/schedule/scheduleHeader/ScheduleHeader';
import { MonthCalendar } from '../../components/schedule/monthCalendar/MonthCalendar';
import { LongButton } from '../../components/common/button/Button';

export const Schedule: React.FC = () => {
  return (
    <>
      <div className={style.scheduleWrapper}>
        <ScheduleHeader />
        <MonthCalendar />
        <LongButton variant="success">일정 추가</LongButton>
      </div>
    </>
  );
};
