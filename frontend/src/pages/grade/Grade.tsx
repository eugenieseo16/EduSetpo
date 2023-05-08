import { ShortButtonHug } from "../../components/button/Button";

export const Grade = () => {
  const onClick = () => {
    history.back();
  };
  return (
    <div>
      <ShortButtonHug onClick={onClick} children={"뒤로"}></ShortButtonHug>
      <div>학생 이름이랑 과목, 성적명 표시 컴포넌트</div>
      <div>비활성화 버튼</div>
      <div>성적 입력 버튼</div>
      <div>성적 그래프 컴포넌트</div>
      <div>성실도 보여주는 컴포넌트</div>
      <div>여력이 된다면 이미지로 저장하는 버튼</div>
    </div>
  );
};
