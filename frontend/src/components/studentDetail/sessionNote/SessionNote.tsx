import style from "./SessionNote.module.css";
export const SessionNote = () => {
  return (
    <div className={style.sessionNote}>
      <h3>수업노트</h3>
      <textarea></textarea>
    </div>
  );
};
