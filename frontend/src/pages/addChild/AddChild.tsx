import { useState } from 'react';
import { AddChildBox } from '../../components/addchild/addChildBox/AddChildBox';
import { AddChildModal } from '../../components/addchild/addChildModal/AddChildModal';
import styles from './AddChild.module.scss';
import ParentsHeader from '../../components/common/parentsHeader/ParentsHeader';

export const AddChild = () => {
  const [studentLessonId, setStudentLessonId] = useState<any>('');
  const [childName, setChildName] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <ParentsHeader mainTitle="아이 추가" />

      <div>
        <div className={styles['addchild-container']}>
          <AddChildBox
            studentLessonId={studentLessonId}
            setStudentLessonId={setStudentLessonId}
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
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
    </>
  );
};
