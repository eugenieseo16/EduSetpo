import { useNavigate } from 'react-router-dom';
import { LongButton } from '../../components/common/button/Button';

export const StudentCreate = () => {
  const navigate = useNavigate();
  const onClickSubmit = () => {
    navigate(-1);
  };
  return (
    <div>
      <div>학생 이름:</div>
      <input type="text" />
      <div>학생 전화번호:</div>
      <input type="text" />
      <div>대표 학부모 전화번호:</div>
      <input type="text" />
      <LongButton variant="success" onClick={onClickSubmit}>
        등록하기
      </LongButton>
    </div>
  );
};
