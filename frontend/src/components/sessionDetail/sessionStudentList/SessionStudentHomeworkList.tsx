import { useEffect, useState } from 'react';
import style from './SessionStudentHomeworkList.module.css';
import { Homework } from '../../../types/homework';
import { GetHomework } from '../../../api/homeworkApis';
import { CheckList } from '../../common/checkList/CheckList';
import { ShortButtonHug } from '../../common/button/Button';

interface HomeworkProps {
  studentId: number;
  sessionId: number;
  studentName: string;
}

export const SessionStudentHomeworkList = ({
  studentId,
  sessionId,
  studentName,
}: HomeworkProps) => {
  const [homeworks, setHomeworks] = useState<Homework[] | undefined>();
  const [isCheckListOpened, setIsCheckListOpened] = useState(false);

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

  const onOpenHomework = (prev: boolean) => {
    setIsCheckListOpened(!prev);
  };

  return (
    <div className={style.studentList}>
      <h3>
        {studentName}
        <ShortButtonHug onClick={() => onOpenHomework(isCheckListOpened)}>
          숙제
        </ShortButtonHug>
      </h3>
      {isCheckListOpened ? (
        <CheckList
          data={homeworks}
          grid={'30% 70%'}
          headRow={['완료여부', '내용']}
          type={'homework'}
          url={'/mypage/notice/n'}
        />
      ) : null}
    </div>
  );
};
