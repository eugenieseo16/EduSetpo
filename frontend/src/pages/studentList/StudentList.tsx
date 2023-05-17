import { LongButton } from '../../components/common/button/Button';
import { useState, useEffect } from 'react';
import style from './StudentList.module.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { StudentToggleBox } from '../../components/studentList/studentToggle/StudentToggleBox';
import { Student } from '../../types/student';
import { readStudentListApi } from '../../api/studentApis';
import { Tag } from '../../components/common/tag/Tag';

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
      setAddList(result.data.responseData);
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

  const subThis = () => {};
  return (
    <div>
      <div className={style.column}>
        {isSetting ? <h1>학생 추가</h1> : <h1>학생 목록</h1>}
      </div>
      {isSetting ? (
        <div className={style.addList}>
          {addList?.map((data: any, index: number) => (
            // <StudentToggleBox isAdd={false} studentInfo={data} key={index} />
            <Tag name={data.studentName} idx={index} />
          ))}
        </div>
      ) : null}
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
