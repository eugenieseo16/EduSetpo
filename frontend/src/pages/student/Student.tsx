import {
  LongButton,
  ShortButtonFixed,
  ShortButtonHug,
} from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

export const Student = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("detail");
  };
  return (
    <div>
      <h1>강잼민</h1>
      <div>
        <ShortButtonFixed variant="danger">비활성화</ShortButtonFixed>
        <ShortButtonFixed variant="primary">수정</ShortButtonFixed>
      </div>
      <div>수강과목</div>
      <div>대충 수강과목들이 생겨날 곳</div>
      <div>학생</div>
      <div>학생번호</div>
      <div>학부모</div>
      <div>학부모번호</div>
      <div>상담내역</div>
      <ShortButtonHug onClick={onClick}>세션상세</ShortButtonHug>
      <LongButton variant="success">인증코드 SMS 보내기</LongButton>
    </div>
  );
};
