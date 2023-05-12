import style from './MonthCalendar.module.scss';
import { Days } from '../days/Days';

export const MonthCalendar: React.FC = () => {
  return (
    <>
      <div className={style.calendarWrapper}>
        <Days />
        {/* <MonthBody /> */}
      </div>
    </>
  );
};
