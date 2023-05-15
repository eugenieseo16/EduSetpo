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

  // 카테고리 셀렉트 박스 기능
  const onCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    // 카테고리 추가 프론트 구현 방식 결정하기
    if (value == 'add') {
      console.log('카테고리 추가');
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

  // 카테고리 추가하는 API 호출 함수
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
      {/* 이미지 저장 버튼은 html2canvas로 나중에 시간 되면 구현할거임
      <ShortButtonHug variant="success">이미지저장 버튼</ShortButtonHug> */}
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
