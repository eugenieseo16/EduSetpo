import { ShortButtonFixed } from "../../common/button/Button";

export const StudentDetailHeader = () => {
  return (
    <div>
      <h1>강잼민</h1>
      <div>
        <ShortButtonFixed variant="danger">비활성화</ShortButtonFixed>
        <ShortButtonFixed variant="primary">수정</ShortButtonFixed>
      </div>
    </div>
  );
};
