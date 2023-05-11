import { LongButton } from '../../common/button/Button';
import axios from 'axios';
import styles from './AddChildBox.module.scss';

interface AddChildBoxProps {
  studentLessonId: any;
  setStudentLessonId: (id: any) => void;
  setModalOpen: (isOpen: boolean) => void;
}

export const AddChildBox: React.FC<AddChildBoxProps> = ({
  studentLessonId,
  setStudentLessonId,
  setModalOpen,
}) => {
  const checkStudentLessonId = async (): Promise<boolean> => {
    try {
      const response = await axios.get(
        `http://localhost:8080/studentLesson/${studentLessonId}`
      );
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      alert('유효하지 않은 인증번호 입니다.');
    }
    return false;
  };

  const handleModalOpen = async (): Promise<void> => {
    const isValidId = await checkStudentLessonId();
    if (isValidId) {
      setModalOpen(true);
    }
  };

  return (
    <div className={styles['add-child-container']}>
      <h2>인증번호 입력</h2>
      <input
        type="text"
        placeholder="인증번호를 입력해주세요"
        value={studentLessonId}
        onChange={e => setStudentLessonId(e.target.value)}
      />
      <LongButton variant="success" onClick={handleModalOpen}>
        등록
      </LongButton>
    </div>
  );
};
