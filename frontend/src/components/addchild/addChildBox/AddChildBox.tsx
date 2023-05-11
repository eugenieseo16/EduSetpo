import React, { useState } from 'react';
import styles from './AddChildBox.module.scss';
import { LongButton } from '../../common/button/Button';
import axios from 'axios';
import Modal from '../../common/modal/Modal';
import AddChildModal from '../addChildModal/AddChildModal';

export const AddChildBox: React.FC = () => {
  const [studentLessonId, setStudentLessonId] = useState<string>('');
  const [childName, setChildName] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const parentId = Math.floor(Math.random() * 1000); // your parent id goes here

  const checkStudentLessonId = async (): Promise<boolean> => {
    try {
      const response = await axios.get(
        // `https://edusepo.com/api/studentLesson/${studentLessonId}`
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

  const addChild = async (): Promise<void> => {
    try {
      const response = await axios.post(
        // 'https://edusepo.com/api/parent/children',
        'http://localhost:8080/parent/children',
        {
          parent_id: parentId,
          student_lesson_id: studentLessonId,
          child_name: childName,
        }
      );
      if (response.status === 200) {
        alert('Child added successfully');
      }
    } catch (error) {
      alert('Error adding child');
    }
    setModalOpen(false);
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
      <AddChildModal isOpen={modalOpen} handleClose={() => setModalOpen(false)}>
        <h1>Child Name</h1>
        <input
          type="text"
          placeholder="Enter Child Name"
          value={childName}
          onChange={e => setChildName(e.target.value)}
        />
        <LongButton variant="success" onClick={addChild}>
          등록
        </LongButton>
      </AddChildModal>
    </div>
  );
};
