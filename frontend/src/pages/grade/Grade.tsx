import { ShortButtonHug } from "../../components/common/button/Button";
import { Graph } from "../../components/common/graph/Graph";
import { Effort } from "../../components/grade/effort/Effort";
import { GradeHeader } from "../../components/grade/gradeHeader/GradeHeader";

export const Grade = () => {
  const onClick = () => {
    history.back();
  };
  return (
    <div>
      <ShortButtonHug onClick={onClick} children={"뒤로"}></ShortButtonHug>
      <GradeHeader />
      <ShortButtonHug>비활성화</ShortButtonHug>
      <ShortButtonHug>성적입력</ShortButtonHug>
      <Graph />
      <Effort />
      <ShortButtonHug variant="success">이미지저장 버튼</ShortButtonHug>
    </div>
  );
};
