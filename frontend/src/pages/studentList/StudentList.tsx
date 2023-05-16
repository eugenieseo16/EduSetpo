import { LongButton } from '../../components/common/button/Button';
import { useState } from 'react';
import style from './StudentList.module.scss';
import { useNavigate } from 'react-router-dom';
import { StudentToggleBox } from '../../components/studentList/StudentToggleBox';

export const StudentList = () => {
  const navigate = useNavigate();
  const [addList, setAddList] = useState(['골찍이', '갈쭉이']);
  const [studentList, setStudentList] = useState([
    '개구리는골골',
    '갈매기는갈갈',
  ]);
  const onClickAdd = () => {
    navigate('../student/create');
  };
  const onClickSubmit = () => {
    navigate(-1);
  };
  return (
    <div>
      <div>추가됨</div>
      <hr />
      {addList.map((data, index) => {
        return (
          <StudentToggleBox isAdd={false} studentName={data} key={index} />
        );
      })}
      <div>학생 목록</div>
      <hr />
      {studentList.map((data, index) => {
        return <StudentToggleBox isAdd={true} studentName={data} key={index} />;
      })}
      <LongButton onClick={onClickAdd}>학생 추가</LongButton>
      <LongButton onClick={onClickSubmit} variant="success">
        완료
      </LongButton>
    </div>
  );
};
