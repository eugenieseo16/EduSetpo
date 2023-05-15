import styles from './ChildrenList.module.scss';
import { NoChild } from '../nochild/NoChild';
import { ChildrenCard } from '../childrenCard/ChildrenCard';
import { useRecoilState } from 'recoil';
import { parentInfoState } from '../../atoms/user.atom';
import { readChildrenApi } from '../../api/childrenApis';
import { useEffect, useState } from 'react';
import { Child } from '../../types/types';

export const ChildrenList = () => {
  const [userInfo, setUserInfo] = useRecoilState(parentInfoState);
  const [children, setChildren] = useState<Child[]>([]);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await readChildrenApi(userInfo.parentId);
        setChildren(response.data.responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChildren();
  }, [userInfo]);

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
