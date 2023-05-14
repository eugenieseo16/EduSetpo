import { useState } from 'react';
import { ShortButtonHug } from '../../components/common/button/Button';
import { Graph } from '../../components/common/graph/Graph';
import { Effort } from '../../components/grade/effort/Effort';
import { GradeHeader } from '../../components/grade/gradeHeader/GradeHeader';
import { PostGradeCategory } from '../../api/gradeApis';
import { GradeCategory } from '../../types/grade';

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

  const [gradeCategory, setGradeCategory] = useState('');
  const tutorId = 3;
  const onGradeCategory = () => {
    const reqBody: GradeCategory = {
      category: gradeCategory,
      tutorId: tutorId,
    };
    console.log(reqBody);
    PostGradeCategory(reqBody);
  };
  return (
    <>
      {/* 이거슨 제가 필요해서 잠시 만들어 놓은 것 입니다. */}
      <ShortButtonHug onClick={onClick} children={'뒤로'}></ShortButtonHug>
      <GradeHeader student={student} />
      <ShortButtonHug>비활성화</ShortButtonHug>
      <ShortButtonHug>성적입력</ShortButtonHug>
      <h3>성적 추이</h3>
      <Graph />
      <Effort />
      <ShortButtonHug variant="success">이미지저장 버튼</ShortButtonHug>

      <div>
        <h1>성적 카테고리 입력 테스트</h1>
        <input
          type="text"
          value={gradeCategory}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            setGradeCategory(e.currentTarget.value)
          }
        />
        <ShortButtonHug onClick={onGradeCategory}>카테고리 추가</ShortButtonHug>
      </div>
    </>
  );
};
