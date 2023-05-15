import style from "./StudentDetailContact.module.scss"

export const StudentDetailContact = () => {
  return (
    <div>
      <h2 className={style.column}>연락처</h2>
      <div className={style.content}>
        <div>학생</div>
        <div className={style.phoneNumber}>010-1324-1533</div>
        <div>학부모</div>
        <div className={style.phoneNumber}>010-1588-8175</div>
      </div>
    </div>
  );
};
