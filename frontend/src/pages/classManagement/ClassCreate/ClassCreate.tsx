import { useNavigate } from 'react-router';
import { LongButton } from '../../../components/common/button/Button';

export const ClassCreate = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const navigate = useNavigate();

  return (
    <div>
      <h1>수업 등록</h1>

      <h3>수업명: </h3>
      <input type="text" />

      <h3>일정:</h3>
      <span>월</span>
      <span>화</span>
      <span>수</span>
      <span>목</span>
      <span>금</span>
      <span>토</span>
      <span>일</span>

      <h3>태그:</h3>

      <h3>회차:</h3>

      <h3>시작일:</h3>
      <input type="date" min="2023-05-01" />

      <h3>학생:</h3>

      <LongButton variant="success" onClick={() => navigate('/tutor/class/id')}>
        등록하기
      </LongButton>
    </div>
  );
};
