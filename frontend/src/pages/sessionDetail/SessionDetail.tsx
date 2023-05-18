import { useState, useEffect } from 'react';
import { SessionNote } from '../../components/sessionDetail/sessionNote/SessionNote';
import { SessionSchedule } from '../../components/sessionDetail/sessionSchedule/SessionSchedule';
import { SessionHeader } from '../../components/sessionDetail/sessionHeader/SessionHeader';
import { CheckList } from '../../components/common/checkList/CheckList';
import { ProgressBar } from '../../components/common/progressBar/ProgressBar';
import { Homework } from '../../types/homework';
import { SessionStudentHomeworkList } from '../../components/sessionDetail/sessionStudentList/SessionStudentHomeworkList';
import { v4 as uuidv4 } from 'uuid';
import { StudentList } from '../studentList/StudentList';
import { readSessionApi } from '../../api/sessionApis';
import { Session, SessionResponse } from '../../types/session';
import { useParams } from 'react-router-dom';
import { toggleSessionApi } from '../../api/sessionApis';
import style from './SessionDetail.css';

export const SessionDetail = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState<SessionResponse | undefined>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const sessionData = await readSessionApi(parseInt(sessionId!));
      console.log(sessionData);
      console.log('세션 받아오기!!!!!!');
      setSession(sessionData.data.responseData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching session:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [session?.isCompleted]);

  if (loading) {
    // 로딩 상태 표시
    return <div>Loading...</div>;
  }

  if (!session) {
    // 세션 데이터가 없을 경우 에러 처리
    return <div>Error: Session not found</div>;
  }

  const completeSession = () => {
    // 세션 토글 API 연결
    console.log('세션 토글!');
    console.log(sessionId);
    console.log(session.isCompleted);
    toggleSessionApi(session.sessionId, { isCompleted: session.isCompleted });
  };

  console.log(session);
  return (
    <div>
      {/* <h1>회차 정보 받아와서 학생 이름 표시</h1> */}
      <SessionHeader
        sessionId={session.sessionId}
        isCompleted={session.isCompleted}
        lessonName={session.lesson.lessonName}
        // completeSession={completeSession}
      />
      <SessionSchedule
        actualDate={session.actualDate}
        startTime={session.startTime}
        endTime={session.endTime}
      />
      <SessionNote />
      <div>
        <h5 style={{ textAlign: 'left' }}>숙제</h5>
      </div>
      {/* <ProgressBar value={75} /> */}
      {session.studentList.map(student => (
        <SessionStudentHomeworkList
          key={uuidv4()}
          studentName={student.studentName}
          studentId={student.studentId}
          sessionId={session.sessionId}
        />
      ))}
    </div>
  );
};
