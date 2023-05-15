import { LongButton } from '../../common/button/Button';
import { AlertModal } from '../alertModal/AlertModal';
import axios from 'axios';
import styles from './AddChildBox.module.scss';
import { useState } from 'react';
import logoImage from '../../../assets/images/educell.png';

interface AddChildBoxProps {
  studentLessonId: any;
  setStudentLessonId: (id: any) => void;
  setModalOpen: (isOpen: boolean) => void;
  modalOpen: boolean;
}

export const AddChildBox: React.FC<AddChildBoxProps> = ({
  studentLessonId,
  setStudentLessonId,
  setModalOpen,
  modalOpen,
}) => {
  // Add these state
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const checkStudentLessonId = async (): Promise<boolean> => {
    try {
      const response = await axios.get(
        `http://localhost:8080/student-lesson/${studentLessonId}`
      );
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      setAlertMessage('잘못된 인증번호 입니다.');
      setAlertOpen(true);
      setStudentLessonId('');
    }
    return false;
  };

  const handleModalOpen = async (): Promise<void> => {
    const isValidId = await checkStudentLessonId();
    if (isValidId) {
      setModalOpen(true);
    }
  };

  const containerClass = modalOpen
    ? styles['add-child-box-container-hidden']
    : styles['add-child-box-container'];

  return (
    <>
      <div className={containerClass}>
        <img src={logoImage} className={styles['logo-image']} alt="logo" />
        <h2>인증번호 입력</h2>
        <input
          type="text"
          placeholder="인증번호를 입력해주세요"
          value={studentLessonId}
          onChange={e => setStudentLessonId(e.target.value)}
        />
        <LongButton variant="success" onClick={handleModalOpen}>
          등록하기
        </LongButton>
      </div>
      <AlertModal
        message={alertMessage}
        isOpen={alertOpen}
        handleClose={() => setAlertOpen(false)}
      />
    </>
  );
};
