import { useState, useEffect } from 'react';
import { SessionNote } from '../../components/sessionDetail/sessionNote/SessionNote';
import { SessionSchedule } from '../../components/sessionDetail/sessionSchedule/SessionSchedule';
import { SessionHeader } from '../../components/sessionDetail/sessionHeader/SessionHeader';
import { CheckList } from '../../components/common/checkList/CheckList';
import { ProgressBar } from '../../components/common/progressBar/ProgressBar';
import { Homework } from '../../types/homework';
import { GetHomework } from '../../api/homeworkApis';

export const SessionDetail = () => {
  // const navigate = useNavigate();

  const studentId = 1;
  // const studentId = parseInt(useLocation().pathname.split('/')[1],10);
  const sessionId = 1;
  // const sessionId = parseInt(useLocation().pathname.split('/')[1],10);

  const [homeworks, setHomeworks] = useState<Homework[] | undefined>();

  useEffect(() => {
    const fetchHomeworks = async () => {
      try {
        const fetchedHomeworks = await GetHomework(studentId, sessionId);
        setHomeworks(fetchedHomeworks);
      } catch (error) {
        console.error('Error fetching homeworks:', error);
      }
    };

    fetchHomeworks();
  }, [sessionId, studentId]);

  return (
    <div>
      {/* <h1>회차 정보 받아와서 학생 이름 표시</h1> */}
      <h1>강잼민</h1>
      <SessionHeader />
      <SessionSchedule />
      <SessionNote />
      {/* <ProgressBar value={75} /> */}
      <CheckList
        data={homeworks}
        grid={'30% 50% 20%'}
        headRow={['완료여부', '내용', '회차']}
        type={'homework'}
        url={'/mypage/notice/n'}
      />
      <div></div>
    </div>
  );
};
