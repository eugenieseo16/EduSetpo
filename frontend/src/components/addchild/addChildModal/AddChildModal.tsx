import React from 'react';
import axios from 'axios';
import styles from './AddChildModal.module.scss';
import { LongButton } from '../../common/button/Button';

interface AddChildModalProps {
  isOpen: boolean;
  handleClose: () => void;
  childName: string;
  setChildName: (name: string) => void;
  setModalOpen: (isOpen: boolean) => void;
  studentLessonId: number;
}

export const AddChildModal: React.FC<AddChildModalProps> = ({
  isOpen,
  handleClose,
  childName,
  setChildName,
  setModalOpen,
  studentLessonId,
}) => {
  const parentId = Math.floor(Math.random() * 1000);

  const addChild = async (): Promise<void> => {
    try {
      const response = await axios.post(
        'http://localhost:8080/parent/children',
        {
          childName: childName,
          parentId: parentId,
          studentLessonId: studentLessonId,
        }
      );
      if (response.status === 200) {
        alert('Child added successfully');
        handleClose();
      }
    } catch (error) {
      alert('Error adding child');
      console.error(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles['add-child-container']}>
            <button className={styles['close-button']} onClick={handleClose}>
              X
            </button>
            <h3>이름 등록</h3>
            <input
              type="text"
              placeholder="자녀의 이름을 입력해주세요"
              value={childName}
              onChange={e => setChildName(e.target.value)}
            />
            <LongButton variant="success" onClick={addChild}>
              등록
            </LongButton>
          </div>
        </div>
      )}
    </>
  );
};
