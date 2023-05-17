import { LongButton } from '../../components/common/button/Button';
import { useState, useEffect } from 'react';
import style from './StudentList.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { StudentToggleBox } from '../../components/studentList/studentToggle/StudentToggleBox';
import { Student } from '../../types/student';
import { readStudentListApi } from '../../api/studentApis';

export const StudentList = () => {
  const lessonId = useParams<{ lessonId: string }>();
  const [isSetting] = useState(lessonId.lessonId ? true : false);

  const navigate = useNavigate();
  const [addList, setAddList] = useState<Array<Student>>([]);
  const [studentList, setStudentList] = useState<Array<Student>>([]);

  async function readStudentList() {
    try {
      const result = await readStudentListApi();
      setStudentList(result.data.responseData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    readStudentList();
  }, []);

  const onClickAdd = () => {
    navigate('../student/create');
  };
  const onClickSubmit = () => {
    navigate(-1);
  };
  return (
    <div>
      {isSetting ? (
        <div>
          <div>추가됨</div>
          <hr />
          {addList?.map((data: any, index: number) => (
            <StudentToggleBox isAdd={false} studentInfo={data} key={index} />
          ))}
        </div>
      ) : null}
      <div>학생 목록</div>
      <hr />
      {studentList.map((data, index) => (
        <StudentToggleBox
          isAdd={true}
          studentInfo={data}
          key={index}
          isSetting={isSetting}
        />
      ))}
      <LongButton onClick={onClickAdd}>학생 등록</LongButton>

      {isSetting ? (
        <LongButton onClick={onClickSubmit} variant="success">
          완료
        </LongButton>
      ) : null}
    </div>
  );
};
