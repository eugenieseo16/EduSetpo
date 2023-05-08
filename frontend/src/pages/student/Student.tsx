import { useNavigate } from "react-router-dom";
import { ShortButtonHug } from "../../components/button/Button";

export const Student = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("session-detail");
  };

  return (
    <div>
      Student
      {/* 학생 목록 받아와서 수정해주시면 됩니다! 학생 상세 페이지 만드느라 임시로 만들어논 버튼입니당 */}
      <ShortButtonHug onClick={onClick}>학생상세</ShortButtonHug>
    </div>
  );
};
