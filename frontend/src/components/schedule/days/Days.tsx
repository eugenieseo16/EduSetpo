import style from './Days.module.scss';

export const Days: React.FC = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <>
      <div className={style.daysWrapper}>
        {days.map(day => {
          return (
            <div key={day} className={style.dayDiv}>
              {day}
            </div>
          );
        })}
      </div>
    </>
  );
};
