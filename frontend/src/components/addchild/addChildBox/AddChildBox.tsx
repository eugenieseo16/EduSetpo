import React, { useState } from 'react';
import styles from './AddChildBox.module.scss';
import { LongButton } from '../../common/button/Button';
import axios from 'axios';

export const AddChildBox: React.FC = () => {
  const [studentLessonId, setStudentLessonId] = useState<string>('');
  const [childName, setChildName] = useState<string>('');
  const parentId = Math.floor(Math.random() * 1000);

  const checkStudentLessonId = async (): Promise<boolean> => {
    try {
      const response = await axios.get(
        `https://edusepo.com/api/studentLesson/${studentLessonId}`
      );
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      alert('Student Lesson ID not found');
    }
    return false;
  };

  const addChild = async (): Promise<void> => {
    const isValidId = await checkStudentLessonId();
    if (isValidId) {
      try {
        const response = await axios.post(
          'https://edusepo.com/api/parent/children',
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
      <input
        type="text"
        placeholder="Enter Child Name"
        value={childName}
        onChange={e => setChildName(e.target.value)}
      />
      <LongButton variant="success">등록</LongButton>
    </div>
  );
};
