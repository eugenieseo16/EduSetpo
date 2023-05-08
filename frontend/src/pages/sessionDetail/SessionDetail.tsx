// import { useNavigate } from "react-router-dom";
import { ShortButtonHug } from "../../components/button/Button";
import { SessionNote } from "../../components/sessionDetail/sessionNote/SessionNote";
import { SessionSchedule } from "../../components/sessionDetail/sessionSchedule/SessionSchedule";
import { SessionHeader } from "../../components/sessionDetail/sessionHeader/SessionHeader";
export const SessionDetail = () => {
  // const navigate = useNavigate();

  const onClick = () => {
    history.back();
  };

  return (
    <div>
      <ShortButtonHug onClick={onClick} children={"뒤로"}></ShortButtonHug>
      {/* <h1>회차 정보 받아와서 학생 이름 표시</h1> */}
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
