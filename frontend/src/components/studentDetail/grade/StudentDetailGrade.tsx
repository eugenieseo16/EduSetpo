import { useState, useEffect } from 'react';
import { ShortButtonHug } from '../../common/button/Button';
import { Graph } from '../../common/graph/Graph';
import { Grade, GradeCategory } from '../../../types/grade';
import {
  GetGradeCategory,
  PostGradeCategory,
  GetGradesByCategory,
  GetGrades,
} from '../../../api/gradeApis';

interface Student {
  name: string;
  session: string;
}

export const StudentDetailGrade = () => {
  const gradeCategories = GetGradeCategory();
  const studentLessonId = 1;
  const [grades, setGrades] = useState<Grade[]>(GetGrades(studentLessonId));

  useEffect(() => console.log(grades), [grades]);
  const tutorId = 3;

  const onCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    // 모달 창 열고 카테고리 추가
    if (value == 'add') {
      console.log('모달창 열고 카테고리 추가');
      // PostGradeCategory;
    } else if (value === '0') {
      setGrades(GetGrades(studentLessonId));
      console.log('전체 성적 요청');
    } else {
      const categoryId = parseInt(value, 10);
      console.log(`카테고리 아이디 ${categoryId}인 성적 필터 api요청`);
      setGrades(GetGradesByCategory(studentLessonId, categoryId));
    }
  };

  console.log(gradeCategories);
  // const onGradeCategory = () => {
  //   const reqBody: GradeCategory = {
  //     category: gradeCategory,
  //     tutorId: tutorId,
  //   };
  //   console.log(reqBody);
  //   PostGradeCategory(reqBody);
  // };
  return (
    <>
      <select name="gradeCategory" id="" onChange={onCategory}>
        <option value="0" selected>
          전체
        </option>
        {gradeCategories.map(gradeCategory => (
          <option
            key={gradeCategory.categoryid}
            value={gradeCategory.categoryid}
          >
            {gradeCategory.category}
          </option>
        ))}
        <option value="add">
          <div>카테고리 추가</div>
        </option>
      </select>

      <ShortButtonHug>성적입력</ShortButtonHug>
      <ShortButtonHug variant="success">이미지저장 버튼</ShortButtonHug>
      {/* <ShortButtonHug onClick={onGradeCategory}>카테고리 추가</ShortButtonHug> */}
      <Graph />
      {/* <div>
        <h1>성적 카테고리 입력 테스트</h1>
        <input
          type="text"
          value={gradeCategory}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            setGradeCategory(e.currentTarget.value)
          }
        />
      </div> */}
    </>
  );
};
