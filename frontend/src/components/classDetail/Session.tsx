import { useEffect, useState } from 'react';
import style from './Session.module.scss';

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import {
  readSessioinByLessonIdApi,
  toggleSessionApi,
} from '../../api/sessionApis';
import { useNavigate } from 'react-router-dom';

interface SessionProps {
  lessonId: number;
}

interface Session {
  value: any;
  sessionId: number;
  lesson: {
    lessonId: number;
    tutorId: number;
    startDate: [number, number, number];
    endDate: [number, number, number] | null;
    lessonName: string;
    memo: string;
    totalTime: number;
    createdAt: [number, number, number, number, number, number, number];
    ended: boolean;
  };
  isCompleted: boolean;
  memo: string | null;
  actualDate: [number, number, number];
  startTime: [number, number, number];
  endTime: [number, number, number];
  duration: number;
  studentList: Array<{
    studentId: number;
    tutorId: number;
    tutor: {
      tutorId: number;
      email: string;
      password: string;
      name: string;
      nickname: string;
      profileUrl: string;
      isWithdraw: boolean;
      themeIndex: number;
      createdAt: [number, number, number];
      isAuthenticated: boolean;
      refreshToken: string;
      roles: string[];
      enabled: boolean;
      username: string;
      authorities: Array<{ authority: string }>;
      accountNonLocked: boolean;
      credentialsNonExpired: boolean;
      accountNonExpired: boolean;
    };
    studentName: string;
    studentContact: string;
    parentContact: string;
    isActive: boolean;
    createdAt: [number, number, number, number, number, number, number];
  }>;
  findTagsDtoList: Array<{
    tagId: number;
    tag: {
      tagId: number;
      tutorId: number;
      tag: string;
    };
  }>;
}

export const Session = ({ lessonId }: SessionProps) => {
  const navigate = useNavigate();

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const data = (await readSessioinByLessonIdApi(lessonId)).data
        .responseData;
      setData(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
    // toggleSession(1, true);
  }, []);

  const [toggleOpen, setToggleOpen] = useState(false);

  function toggleSessionList() {
    setToggleOpen(!toggleOpen);
    fetchData();
  }

  const [sessionList, setSessionList] = useState([]);

  const currentMonthSessionList: any = [];
  if (data != undefined) {
    for (const item of data) {
      if (item['actualDate'][1] === currentMonth) {
        currentMonthSessionList.push(item);
      }
    }
  }

  function toggleSession(sessionId: number, isCompleted: boolean) {
    toggleSessionApi(sessionId, { isCompleted: !isCompleted });
  }

  let sortedSessions = currentMonthSessionList.sort(
    (a: { actualDate: number[] }, b: { actualDate: number[] }) =>
      a.actualDate[2] < b.actualDate[2] ? -1 : 1
  );

  return (
    <>
      <div className={style.sessionContainer} onClick={toggleSessionList}>
        <h3>{currentMonth}월 회차</h3>
        {toggleOpen ? (
          <IoMdArrowDropup size="2rem" />
        ) : (
          <IoMdArrowDropdown size="2rem" />
        )}
      </div>

      {toggleOpen ? (
        <div className={style.sessionList}>
          <p>회차 날짜를 클릭하여 회차 상세로 이동하세요.</p>
          {sortedSessions.map((session: any, i: number) => (
            <div key={i} className={style.sessionItem}>
              {session.isCompleted ? (
                <input
                  type="checkbox"
                  onClick={() =>
                    toggleSession(session.sessionId, session.isCompleted)
                  }
                  checked
                />
              ) : (
                <input
                  type="checkbox"
                  onClick={() =>
                    toggleSession(session.sessionId, session.isCompleted)
                  }
                />
              )}
              <p>{i + 1}회차</p>
              <h6
                onClick={() => navigate(`/tutor/session/${session.sessionId}`)}
              >
                {session.actualDate.join('-')}
              </h6>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};
