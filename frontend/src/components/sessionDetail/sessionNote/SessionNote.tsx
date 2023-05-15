import style from './SessionNote.module.css';
export const SessionNote = () => {
  // 수업 노트 작성 API 연결
  return (
    <div className={style.sessionNote}>
      <h3>수업노트</h3>
      <textarea></textarea>
    </div>
  );
};
