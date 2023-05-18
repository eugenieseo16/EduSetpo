import styles from './ChildrenList.module.scss';
import { NoChild } from '../nochild/NoChild';
import { ChildrenCard } from '../childrenCard/ChildrenCard';
import { useRecoilState } from 'recoil';
import { parentInfoState } from '../../atoms/user.atom';
import { readChildrenApi } from '../../api/childrenApis';
import { useEffect, useState } from 'react';
import { Child } from '../../types/types';
import { LongButtonFlex } from '../common/button/Button';
import { NavLink } from 'react-router-dom';

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
    <>
      <div>
        {children.length > 0 ? (
          children.map((child, index) => (
            <div className={styles['children-card-container']} key={index}>
              <NavLink
                to={`children/lesson/detail/${child.studentLessonId}`}
                className={styles['children-card-container']}
              >
                <ChildrenCard
                  isWithdraw={child.parent.isWithdraw}
                  childName={child.childName}
                  studentLessonId={child.studentLessonId}
                />
              </NavLink>
            </div>
          ))
        ) : (
          <NoChild />
        )}
      </div>
      <div className={styles['add-child-button-container']}>
        <LongButtonFlex variant="success" width="90%">
          <NavLink to="addchild">+ 내 아이 추가하기</NavLink>
        </LongButtonFlex>
      </div>
    </>
  );
};
