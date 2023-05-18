import { LongButton } from '../../components/common/button/Button';
import { useState, useEffect } from 'react';
import style from './StudentList.module.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { StudentToggleBox } from '../../components/studentList/studentToggle/StudentToggleBox';
import {
  readStudentListApi,
  readStudentLessonListByLessonIdApi,
} from '../../api/studentApis';
import { Tag } from '../../components/common/tag/Tag';
import { Student } from '../../types/student';

export const StudentList = () => {
  const lessonId = useParams<{ lessonId: string }>();
  const [isSetting] = useState(lessonId.lessonId ? true : false);

  const navigate = useNavigate();
  const [addList, setAddList] = useState<Array<Student>>([]);
  const [studentList, setStudentList] = useState<Array<Student>>([]);

  // 아래 리스트 불러와
  async function readStudentList() {
    try {
      const result = await readStudentListApi();
      setStudentList(result.data.responseData);
      if (isSetting) {
        readStudentListByLessonId();
      }
    } catch (err) {
      console.log(err);
    }
  }

  // 위에 리스트 불러와
  async function readStudentListByLessonId() {
    try {
      const result = await readStudentLessonListByLessonIdApi(
        lessonId.lessonId
      );

      const newList: Array<Student> = [];
      for (const tar of result.data.responseData) {
        const test = {
          studentId: tar.studentId,
          tutorId: tar.tutorId,
          studentName: tar.studentName,
          studentContact: tar.studentContact,
          parentContact: tar.parentContact,
          isActive: tar.isActive,
        };
        newList.push(test);
        isIn(test);
      }
      setAddList(newList);
    } catch (err) {
      console.log(err);
    }
  }
  console.log('여기서 프린트하면?', studentList);
  function isIn(input: any) {
    console.log('돌기는하는데', studentList);

    // console.log(studentList);
    // studentList.map((data: any) => {
    //   if (data.studentId === input.studentId) {
    //     setStudentList(studentList.filter(item => item != data));
    //     return true;
    //   }
    //   return false;
    // });
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
      <div className={style.column}>
        {isSetting ? <h1>학생 추가</h1> : <h1>학생 목록</h1>}
      </div>
      {isSetting ? (
        <div className={style.addList}>
          {addList?.map((data: any, index: number) => (
            <div key={index}>
              <Tag name={data.studentName} idx={index} isUesXBox={true} />
            </div>
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
