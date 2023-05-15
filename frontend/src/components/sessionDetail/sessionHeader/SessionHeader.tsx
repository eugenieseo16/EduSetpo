import style from './SessionHeader.module.css';

export const SessionHeader = () => {
  return (
    <div className={style.sessionHeader}>
      <input type="checkbox" />
      <div className={style.sessionInfo}>
        <div>수학1</div>
        <div>3/8 회차</div>
      </div>
    </div>
  );
};
