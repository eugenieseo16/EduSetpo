import style from './Schedule.module.scss';
import { ScheduleHeader } from '../../components/schedule/scheduleHeader/ScheduleHeader';
import { Arrows } from '../../components/schedule/arrows/Arrows';
import { MonthCalendar } from '../../components/schedule/monthCalendar/MonthCalendar';
import { WeekCalendar } from '../../components/schedule/weekCalendar/WeekCalendar';
import { LongButton } from '../../components/common/button/Button';
import { mwState } from '../../atoms';
import { useRecoilValue } from 'recoil';
import { NavLink, useNavigate } from 'react-router-dom';

export const Schedule: React.FC = () => {
  const mw = useRecoilValue(mwState);
  const navigate = useNavigate();

  return (
    <>
      <div className={style.scheduleWrapper}>
        <ScheduleHeader />
        <Arrows />
        {mw === 'M' ? <MonthCalendar /> : <WeekCalendar />}
        <div onClick={() => navigate('/tutor/class/create')}>
          <LongButton variant="success">일정 추가</LongButton>
        </div>
      </div>
    </>
  );
};
