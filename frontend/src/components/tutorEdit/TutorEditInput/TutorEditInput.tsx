import style from "./TutorEditInput.module.scss";
import { RiCloseCircleFill } from "react-icons/ri";

export const TutorEditInput: React.FC = () => {
  const userName = "여덟글자닉네임임";
  const count = 8;

  return (
    <div className={style.nickInputWrapper}>
      <input className={style.nickInput} placeholder={userName} />
      <RiCloseCircleFill className={style.xBox} />
      <div className={style.inputMsg}>
        <div>닉네임을 입력하세요.</div>
        <div>{count}/8</div>
      </div>
    </div>
  );
};
