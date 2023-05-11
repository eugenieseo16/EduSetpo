import { useState } from 'react';
import { AddChildBox } from '../../components/addchild/addChildBox/AddChildBox';
import { AddChildModal } from '../../components/addchild/addChildModal/AddChildModal';
import styles from './AddChild.module.scss';

export const AddChild = () => {
  const [studentLessonId, setStudentLessonId] = useState<any>('');
  const [childName, setChildName] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <h2>아이 추가</h2>
      <div>
        <p>인증코드 입력 창</p>
        <AddChildBox
          studentLessonId={studentLessonId}
          setStudentLessonId={setStudentLessonId}
          setModalOpen={setModalOpen}
        />
        <AddChildModal
          isOpen={modalOpen}
          handleClose={() => setModalOpen(false)}
          childName={childName}
          setChildName={setChildName}
          setModalOpen={setModalOpen}
          studentLessonId={studentLessonId}
        />
      </div>
    </div>
  );
};
