import {
  LongButton,
  ShortButtonHug,
} from "../../components/common/button/Button";
import { useNavigate } from "react-router-dom";
import { StudentDetailHeader } from "../../components/studentDetail/1.studentDetailHeader/StudentDetailHeader";
import { StudentDetailCourse } from "../../components/studentDetail/2.studentDetailCourse/StudentDetailCourse";
import { StudentDetailContact } from "../../components/studentDetail/3.studentDetailContact/StudentDetailContact";

export const StudentDetail = () => {
  const navigate = useNavigate();

  const onClickSession = () => {
    navigate("session-detail");
  };

  const onClickGrade = () => {
    navigate("grade");
  };
  return (
    <div>
      <StudentDetailHeader />
      <StudentDetailCourse />
      <StudentDetailContact />
      <div>상담내역</div>
      <LongButton variant="success">인증코드 SMS 보내기</LongButton>
      {/* 학생 목록 받아와서 수정해주시면 됩니다! 학생 상세 페이지 만드느라 임시로 만들어논 버튼입니당 */}
      <ShortButtonHug onClick={onClickSession}>회차상세</ShortButtonHug>
      <ShortButtonHug onClick={onClickGrade}>성적상세</ShortButtonHug>
    </div>
  );
};
