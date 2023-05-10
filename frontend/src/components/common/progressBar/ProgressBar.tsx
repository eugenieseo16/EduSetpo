import style from "./ProgressBar.module.css";

export const ProgressBar = () => {
  return (
    <div className={style.progressBar}>
      <input className={style.rangeInput} type="range" value={85}></input>
    </div>
  );
};
