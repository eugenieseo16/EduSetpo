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
import { v4 as uuidv4 } from 'uuid';

export const StudentDetailGrade = () => {
  const [categories, setCategories] = useState<GradeCategory[]>();
  const studentLessonId = 1;
  const [grades, setGrades] = useState<Grade[]>();
  const [selectedCategory, setSelectedCategory] = useState('0');

  // 카테고리 가져오는 API 호출
  const fetchCategories = async () => {
    try {
      const fetchedCategories = await GetGradeCategory();
      setCategories(fetchedCategories.data.responseData);
    } catch (error) {
      console.error('Error fetching homeworks:', error);
    }
  };

  // 카테고리 별 성적목록 가져오는 API 호출
  const fetchGradesByCategory = async (categoryId: string) => {
    try {
      const fetchedGrades = await GetGradesByCategory(categoryId);
      setGrades(fetchedGrades.data.responseData);
    } catch (error) {
      console.error('Error fetching homeworks:', error);
    }
  };

  // 카테고리 셀렉트 박스 기능
  const onCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const categoryId = value;
    fetchGradesByCategory(categoryId);

    setSelectedCategory(value);
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

  //페이지 처음 렌더링 될 때 실행
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories != undefined) {
      fetchGradesByCategory(categories[0].gradeCategoryId.toString());
    }
  }, [categories]);

  return (
    <>
      <select
        name="gradeCategory"
        id=""
        onChange={onCategory}
        value={selectedCategory}
      >
        {categories?.map(category => (
          <option key={`${uuidv4()}`} value={category.gradeCategoryId}>
            {category.category}
          </option>
        ))}
      </select>

      {/* <ShortButtonHug>성적입력</ShortButtonHug> */}

      {grades && <Graph grades={grades} />}

      {/* 이미지 저장 버튼은 html2canvas로 나중에 시간 되면 구현할거임
    <ShortButtonHug variant="success">이미지저장 버튼</ShortButtonHug> */}
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
