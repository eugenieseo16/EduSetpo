import style from "./SessionSchedule.module.css";
import { ShortButtonHug } from "../../button/Button";

export const SessionSchedule = () => {
  return (
    <div className={style.sessionSchedule}>
      <h3>일정</h3>
      <div>
        {/* <span>디비에서 일정 받아와서 보여주기</span> */}
        <span>4월 26일 (수) 15:00~17:00</span>
        <ShortButtonHug
          className={style.updateButton}
          children={"수정"}
        ></ShortButtonHug>
      </div>
    </div>
  );
};
