// import { useNavigate } from "react-router-dom";
import { ShortButtonHug } from "../../components/common/button/Button";
import { SessionNote } from "../../components/sessionDetail/sessionNote/SessionNote";
import { SessionSchedule } from "../../components/sessionDetail/sessionSchedule/SessionSchedule";
import { SessionHeader } from "../../components/sessionDetail/sessionHeader/SessionHeader";
import { CheckList } from "../../components/common/checkList/CheckList";

interface Notice {
  isCompleted: boolean;
  session: number;
  content: string;
}

export const SessionDetail = () => {
  // const navigate = useNavigate();

  const onClick = () => {
    history.back();
  };

  const notice: Array<Notice> = [
    {
      isCompleted: false,
      session: 3,
      content: "첫번째 숙제",
    },
    {
      isCompleted: true,
      session: 3,
      content: "두번째 과제",
    },
    {
      isCompleted: false,
      session: 3,
      content: "세번째 안해",
    },
  ];

  return (
    <div>
      <ShortButtonHug onClick={onClick} children={"뒤로"}></ShortButtonHug>
      {/* <h1>회차 정보 받아와서 학생 이름 표시</h1> */}
      <h1>강잼민</h1>
      <SessionHeader />
      <SessionSchedule />
      <SessionNote />
      <CheckList
        data={notice}
        grid={"30% 50% 20%"}
        headRow={["완료여부", "내용", "회차"]}
        type={"homework"}
        url={"/mypage/notice/n"}
      />
      <div>프로그래스바 컴포넌트 들어갈 자리</div>
      <div>체크리스트 컴포넌트 들어갈 자리</div>
    </div>
  );
};
