import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './AddChildModal.module.scss';
import { LongButton } from '../../common/button/Button';
import { AlertModal } from '../alertModal/AlertModal';
import { RiCloseCircleFill } from 'react-icons/ri';
import logoImage from '../../../assets/images/educell.png';

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

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();

  const addChild = async (): Promise<void> => {
    if (!childName.trim()) {
      setAlertMessage('자녀의 이름이 입력되지 않았습니다.');
      setAlertOpen(true);
      return;
    }
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
        setAlertMessage('자녀 등록에 성공하셨습니다.');
        setAlertOpen(true);
        handleClose();
      }
    } catch (error) {
      setAlertMessage('자녀가 정상적으로 등록되지 않았습니다.');
      setAlertOpen(true);
      console.error(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles['add-child-modal-container']}>
          <img src={logoImage} className={styles['logo-image']} alt="logo" />
          <RiCloseCircleFill
            className={styles['close-button']}
            onClick={handleClose}
          />

          <h2>이름 등록</h2>
          <input
            type="text"
            placeholder="자녀의 이름을 입력해주세요"
            value={childName}
            onChange={e => setChildName(e.target.value)}
          />
          <LongButton variant="success" onClick={addChild}>
            등록하기
          </LongButton>
        </div>
      )}
      <AlertModal
        message={alertMessage}
        isOpen={alertOpen}
        handleClose={() => setAlertOpen(false)}
        onSuccess={() => navigate('/parents')}
        onFailure={() => setAlertOpen(false)}
      />
    </>
  );
};
