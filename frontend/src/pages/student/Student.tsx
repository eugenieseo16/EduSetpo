import {
  LongButton,
  ShortButtonFixed,
  ShortButtonHug,
} from "../../components/common/button/Button";
import { useNavigate } from "react-router-dom";

export const Student = () => {
  const navigate = useNavigate();

  const onClickSession = () => {
    navigate("session-detail");
  };

  const onClickGrade = () => {
    navigate("grade");
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
      <LongButton variant="success">인증코드 SMS 보내기</LongButton>
      {/* 학생 목록 받아와서 수정해주시면 됩니다! 학생 상세 페이지 만드느라 임시로 만들어논 버튼입니당 */}
      <ShortButtonHug onClick={onClickSession}>회차상세</ShortButtonHug>
      <ShortButtonHug onClick={onClickGrade}>성적상세</ShortButtonHug>
    </div>
  );
};
