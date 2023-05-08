import { LongButton, ShortButtonFixed } from "./../../components/button/Button";

export const Student = () => {
  return (
    <div>
      <div>강잼민</div>
      <div>
        <ShortButtonFixed variant="danger">비활성화</ShortButtonFixed>
        <ShortButtonFixed variant="primary">수정</ShortButtonFixed>
      </div>
      <div>수강과목</div>
      
      <LongButton variant="success">인증코드 SMS 보내기</LongButton>
    </div>
  );
};
