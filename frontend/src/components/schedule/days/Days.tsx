import style from './Days.module.scss';

export const Days: React.FC = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <>
      <div className={style.daysWrapper}>
        {days.map(day => {
          if (day === '일') {
            return (
              <div key={day} className={style.sundayDiv}>
                {day}
              </div>
            );
          } else if (day === '토') {
            return (
              <div key={day} className={style.satdayDiv}>
                {day}
              </div>
            );
          } else {
            return (
              <div key={day} className={style.dayDiv}>
                {day}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
