import style from './SessionNote.module.css';
export const SessionNote = () => {
  // 수업 노트 작성 API 연결
  return (
    <div className={style.sessionNote}>
      <h3>수업노트</h3>
      <textarea placeholder="수업 정보를 입력해보세요."></textarea>
    </div>
  );
};
