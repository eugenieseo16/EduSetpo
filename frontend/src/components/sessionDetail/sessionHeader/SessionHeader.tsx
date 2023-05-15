import style from './SessionHeader.module.css';

export const SessionHeader = () => {
  // 세션 토글 API 연결
  // 세션 정보 API 연결
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
