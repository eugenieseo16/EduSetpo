import { useEffect, useState } from 'react';
import style from './Session.module.scss';

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { readSessioinByLessonIdApi } from '../../api/sessionApis';

interface SessionProps {
  lessonId: number;
}

interface Session {
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
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  // const [list, setList] = useState<ListItem[]>([]);

  const [data, setData] = useState<Session | undefined>(undefined);

  async function fetchData() {
    try {
      const data = (await readSessioinByLessonIdApi(lessonId)).data
        .responseData;
      setData(data);

      console.log(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [toggleOpen, setToggleOpen] = useState(false);

  function toggleSessionList() {
    setToggleOpen(!toggleOpen);
  }

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
        <div>
          <h6>session1</h6>
          <h6>session1</h6>
          <h6>session1</h6>
          <h6>session1</h6>
        </div>
      ) : null}
    </>
  );
};
