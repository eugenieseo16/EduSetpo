import { useRecoilValue } from 'recoil';
import { lessonDetailsState } from '../../atoms/lessonDetails.atom';

interface ChildLessonDetailProps {
  studentLessonId: number;
}

export const ChildLessonDetail: React.FC<ChildLessonDetailProps> = ({
  studentLessonId,
}) => {
  const lessonDetails = useRecoilValue(lessonDetailsState);

  return (
    <div>
      <h2>Child Lesson Detail</h2>
      <p>Tutor Name: {lessonDetails.tutorName}</p>
      <p>Child Name: {lessonDetails.childName}</p>
      <p>Lesson Id: {lessonDetails.lessonId}</p>
      <p>Student Id: {lessonDetails.studentId}</p>
      <p>Lesson Name: {lessonDetails.lessonName}</p>
      <p>Memo: {lessonDetails.memo}</p>
      <p>
        Schedule:{' '}
        {lessonDetails.schedule.map((item, index) => (
          <span key={index}>
            {item.day} {item.startTime} - {item.endTime}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};
