import { ShortButtonFixed } from "../../common/button/Button";
import style from "./StudentDetailHeader.module.scss";

export const StudentDetailHeader = () => {
  return (
    <div>
      <h1 className={style.column}>강잼민</h1>
      <div className={style.row}>
        <ShortButtonFixed variant="danger">비활성화</ShortButtonFixed>
        <ShortButtonFixed variant="primary">수정</ShortButtonFixed>
      </div>
    </div>
  );
};
