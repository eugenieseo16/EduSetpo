import styles from './ChildrenList.module.scss';
import { NoChild } from '../nochild/NoChild';
import { ChildrenCard } from '../childrenCard/ChildrenCard';
import { useRecoilValue } from 'recoil';
import userAtom from '../../atoms/userAtom';
import { readChildrenApi } from '../../api/childrenApis';
import { useEffect, useState } from 'react';

type Child = {
  childId: number;
  parent: {
    parentId: number;
    email: string;
    password: string;
    parentName: string;
    createdAt: [number, number, number];
    isWithdraw: boolean;
  };
  childName: string;
  studentLessonId: number;
};

export const ChildrenList = () => {
  const user = useRecoilValue(userAtom);
  const [children, setChildren] = useState<Child[]>([]);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await readChildrenApi(user.parentId);
        setChildren(response.data.responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChildren();
  }, [user]);

  return (
    <div className={styles['parentsmain-container']}>
      {children.length > 0 ? (
        children.map((child, index) => (
          <ChildrenCard
            key={index}
            isWithdraw={child.parent.isWithdraw}
            childName={child.childName}
            studentLessonId={child.studentLessonId}
          />
        ))
      ) : (
        <NoChild />
      )}
    </div>
  );
};
