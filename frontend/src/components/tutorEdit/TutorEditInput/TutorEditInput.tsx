import style from "./TutorEditInput.module.scss";

export const TutorEditInput: React.FC = () => {
  const userName = "여덟글자닉네임임";

  return (
    <div className={style.nickInputWrapper}>
      <input className={style.nickInput} placeholder={userName} />
    </div>
  );
};
