import { useState, useEffect } from 'react';
import { SessionNote } from '../../components/sessionDetail/sessionNote/SessionNote';
import { SessionSchedule } from '../../components/sessionDetail/sessionSchedule/SessionSchedule';
import { SessionHeader } from '../../components/sessionDetail/sessionHeader/SessionHeader';
import { CheckList } from '../../components/common/checkList/CheckList';
import { ProgressBar } from '../../components/common/progressBar/ProgressBar';
import { Homework } from '../../types/homework';
import { GetHomework } from '../../api/homeworkApis';
import { SessionStudentHomeworkList } from '../../components/sessionDetail/sessionStudentList/SessionStudentHomeworkList';
import { v4 as uuidv4 } from 'uuid';
import { Student } from '../student/Student';

export const SessionDetail = () => {
  // const navigate = useNavigate();

  // const [session, setSession] = useState()
  // 내일 세션 api 연결되면 위의 useState로 변경
  const session = {
    sessionId: 1,
    isCompleted: false,
    lesson: {
      lessonName: '수학4',
    },
    now: 3,
    total: 12,
    students: [
      { studentId: 1, name: '강잼민1' },
      { studentId: 2, name: '강잼민2' },
      { studentId: 3, name: '강잼민3' },
    ],
    memo: null,
    actualDate: [2023, 7, 10],
    startTime: [8, 4, 18],
    endTime: [8, 4, 18],
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        // 세션 정보 API 연결
        // const fetchSession = await 세션 겟하는 api 함수
        // setSession(fetchSession)
      } catch (error) {
        console.log(error);
      }
    };
  }, [session]);

  return (
    <div>
      {/* <h1>회차 정보 받아와서 학생 이름 표시</h1> */}
      <SessionHeader
        isCompleted={session.isCompleted}
        lessonName={session.lesson.lessonName}
      />
      <SessionSchedule
        actualDate={session.actualDate}
        startTime={session.startTime}
        endTime={session.endTime}
      />
      <SessionNote />
      {/* <ProgressBar value={75} /> */}
      {session.students.map(student => (
        <SessionStudentHomeworkList
          key={uuidv4()}
          studentName={student.name}
          studentId={student.studentId}
          sessionId={session.sessionId}
        />
      ))}
    </div>
  );
};
