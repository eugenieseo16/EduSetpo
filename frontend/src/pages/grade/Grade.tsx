import { ShortButtonHug } from '../../components/common/button/Button';
import { Graph } from '../../components/common/graph/Graph';
import { Effort } from '../../components/grade/effort/Effort';
import { GradeHeader } from '../../components/grade/gradeHeader/GradeHeader';

interface Student {
  name: string;
  session: string;
}

export const Grade = () => {
  const onClick = () => {
    history.back();
  };

  const student: Student = {
    name: '강잼민',
    session: '영어',
  };

  return (
    <>
      <ShortButtonHug onClick={onClick} children={'뒤로'}></ShortButtonHug>
      <GradeHeader student={student} />
      <ShortButtonHug>비활성화</ShortButtonHug>
      <ShortButtonHug>성적입력</ShortButtonHug>
      <h3>성적 추이</h3>
      <Graph />
      <Effort />
      <ShortButtonHug variant="success">이미지저장 버튼</ShortButtonHug>
    </>
  );
};
