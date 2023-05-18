import { LongButton } from '../../components/common/button/Button';
import { useState, useEffect } from 'react';
import style from './StudentAdd.module.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Student } from '../../types/student';
import {
  readStudentListApi,
  readStudentLessonListByLessonIdApi,
} from '../../api/studentApis';
import { Tag } from '../../components/common/tag/Tag';
import { RiAddCircleFill, RiUserFill } from 'react-icons/ri';
import { createLessonApi, updateLessonApi } from '../../api/lessonApis';

export const StudentAdd = () => {
  const lessonId = useParams<{ lessonId: string }>();

  const navigate = useNavigate();

  const location = useLocation();
  const body = location.state['body'];
  const page = location.state['page'];
  const updateLessonId = location.state['lessonId'];

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

  async function readStudentListByLessonId() {
    try {
      const result = await readStudentLessonListByLessonIdApi(
        lessonId.lessonId
      );

      const data = result.data.responseData;

      // addList: 수업에 기존에 추가되어있던 학생들 저장
      setAddList(data);

      // studentList: 수업에 기존에 추가되어있던 학셍들 제거
      for (let i = 0; i < addList.length; i++) {
        const newTemp = studentList.filter(student => {
          return student.studentId !== addList[i].studentId;
        });
        setStudentList(newTemp);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function addStudent(student: any) {
    console.log(student);
    console.log('lets add', student.studentName);

    // addList에 학생 추가
    setAddList([
      ...addList,
      {
        studentId: student.studentId,
        studentName: student.studentName,
        isActive: student.isActive,
        parentContact: student.parentContact,
        studentContact: student.studentContact,
      },
    ]);

    // studentList에 학생 제거
    const newTemp = studentList.filter(removeStudent => {
      return removeStudent.studentId !== student.studentId;
    });
    setStudentList(newTemp);
  }

  function removeStudent(student: any) {
    console.log('lets remove', student.studentName);

    // addList에 학생 제거
    const newTemp = addList.filter(removeStudent => {
      return removeStudent.studentId !== student.studentId;
    });
    setAddList(newTemp);

    // studentList에 학생 추가
    setStudentList([
      ...studentList,
      {
        studentId: student.studentId,
        studentName: student.studentName,
        isActive: student.isActive,
        parentContact: student.parentContact,
        studentContact: student.studentContact,
      },
    ]);
  }

  useEffect(() => {
    console.log('useEffect 발동!!!');
    readStudentList();
    readStudentListByLessonId();
  }, []);

  const onClickAdd = () => {
    navigate('../student/create');
  };

  const [finalStudentList, setFinalStudentList] = useState<number[]>([]);

  async function onClickSubmit() {
    for (let i = 0; i < addList.length; i++) {
      finalStudentList.push(addList[i]['studentId']);
      setFinalStudentList(finalStudentList);
    }

    if (page === 'update') {
      const updatedBody = {
        lessonName: body['lessonName'],
        memo: body['memo'],
        numOfSession: body['numOfSession'],
        schedule: body['schedule'],
        startDate: body['startDate'],
        students: finalStudentList,
        tags: body['tags'],
        tutorId: body['tutorId'],
      };
      const token = 'Bearer ' + localStorage.getItem('access_token');

      const result = await updateLessonApi(updateLessonId, updatedBody, token);

      navigate(`/tutor/class/${updateLessonId}`);
    } else {
      const updatedBody = {
        lessonName: body['lessonName'],
        memo: body['memo'],
        numOfSession: body['numOfSession'],
        schedule: body['schedule'],
        startDate: body['startDate'],
        students: finalStudentList,
        tags: body['tags'],
        tutorId: body['tutorId'],
      };

      const token = 'Bearer ' + localStorage.getItem('access_token');

      const lessonId = await createLessonApi(token, updatedBody);

      navigate(`/tutor/class/${lessonId}`);
    }
  }

  const subThis = () => {};
  return (
    <div>
      <div className={style.column}>
        <h1>학생 추가</h1>
      </div>

      <div className={style.addList}>
        {/* 등록된 학생들 */}
        {addList?.map((data: any, index: number) => (
          // <StudentToggleBox isAdd={false} studentInfo={data} key={index} />
          <div onClick={() => removeStudent(data)} key={index}>
            <Tag name={data.studentName} idx={index} />
          </div>
        ))}
      </div>

      {/* 미등록된 학생들 */}
      {studentList.map((data, index) => (
        <div className={style.studentItem} key={index}>
          <div
            className={style.user}
            onClick={() => {
              navigate(`/tutor/student/${data.studentId}`);
            }}
          >
            <RiUserFill size={'1.5rem'} />
            <p>{data.studentName}</p>
          </div>

          <div className={style.userButton}>
            <div className={style.deactivate}>
              <p>비활성화</p>
            </div>

            <div className={style.edit}>
              <p>수정</p>
            </div>
            <div onClick={() => addStudent(data)} className={style.addButton}>
              <RiAddCircleFill size={'1.5rem'} />
            </div>
          </div>
        </div>
      ))}
      <LongButton onClick={onClickAdd}>학생 등록</LongButton>

      <LongButton onClick={onClickSubmit} variant="success">
        완료
      </LongButton>
    </div>
  );
};
