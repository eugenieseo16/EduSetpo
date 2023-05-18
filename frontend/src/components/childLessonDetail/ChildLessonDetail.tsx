import { useRecoilValue } from 'recoil';
import { lessonDetailsState } from '../../atoms/lessonDetails.atom';

interface ChildLessonDetailProps {
  studentLessonId: number;
}
{
  /* Memo: {lessonDetails.memo}
Lesson Id: {lessonDetails.lessonId}
Student Id: {lessonDetails.studentId} */
}
export const ChildLessonDetail: React.FC<ChildLessonDetailProps> = ({
  studentLessonId,
}) => {
  const lessonDetails = useRecoilValue(lessonDetailsState);

  return (
    <div>
      <h2>{lessonDetails.childName}</h2>
      <p>강사: {lessonDetails.tutorName}</p>

      <p>과목: {lessonDetails.lessonName}</p>
      <p>
        시간
        {lessonDetails.schedule.map((item, index) => {
          const dayString =
            item.day === 'MONDAY'
              ? '월'
              : item.day === 'TUESDAY'
              ? '화'
              : item.day === 'WEDNESDAY'
              ? '수'
              : item.day === 'THURSDAY'
              ? '목'
              : item.day === 'FRIDAY'
              ? '금'
              : item.day === 'SATURDAY'
              ? '토'
              : item.day === 'SUNDAY'
              ? '일'
              : null;

          const timeString =
            item.startTime[1] === 0 && item.endTime[1] === 0
              ? `${item.startTime[0]}:00 ~ ${item.endTime[0]}:00`
              : item.startTime[1] === 0
              ? `${item.startTime[0]}:00 ~ ${item.endTime[0]}:${item.endTime[1]}`
              : item.endTime[1] === 0
              ? `${item.startTime[0]}:${item.startTime[1]} ~ ${item.endTime[0]}:00`
              : `${item.startTime[0]}:${item.startTime[1]} ~ ${item.endTime[0]}:${item.endTime[1]}`;

          return (
            <p key={index}>
              {dayString} : {timeString}
            </p>
          );
        })}
      </p>
    </div>
  );
};
