import { useNavigate } from "react-router-dom";
import { ShortButtonHug } from "../../components/button/Button";
import { SessionNote } from "../../components/studentDetail/sessionNote/SessionNote";
import { SessionSchedule } from "../../components/studentDetail/sessionSchedule/SessionSchedule";
import { SessionHeader } from "../../components/studentDetail/sessionHeader/SessionHeader";
export const StudentDetail = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/tutor/student");
  };

  return (
    <div>
      <ShortButtonHug onClick={onClick} children={"뒤로"}></ShortButtonHug>
      <h1>강잼민</h1>
      <SessionHeader />
      <SessionSchedule />
      <SessionNote />
      <h3>숙제 체크</h3>
      <div>프로그래스바 컴포넌트 들어갈 자리</div>
      <div>체크리스트 컴포넌트 들어갈 자리</div>
    </div>
  );
};
