import ParentsHeader from '../../components/common/parentsHeader/ParentsHeader';
import { TbChartHistogram } from 'react-icons/tb';
import styles from './Chart.module.scss';
import { useEffect, useState } from 'react';
import { readChildrenApi } from '../../api/childrenApis';
import { useRecoilState } from 'recoil';
import { parentInfoState } from '../../atoms/user.atom';
import { Child } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { ChildrenCard } from '../../components/childrenCard/ChildrenCard';
import { NoChild } from '../../components/nochild/NoChild';
export const Chart = () => {
  const [userInfo, setUserInfo] = useRecoilState(parentInfoState);
  const [children, setChildren] = useState<Child[]>([]);
  const navigate = useNavigate();

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
      <ParentsHeader
        mainTitle={
          <>
            <TbChartHistogram className={styles['title-icon']} />
            {'통계'}
          </>
        }
      />
      <div>
        {children.length > 0 ? (
          children.map((child, index) => (
            <div
              className={styles['children-card-container']}
              key={index}
              onClick={() =>
                navigate(`/parents/chart/${child.studentLessonId}`, {
                  state: { childName: child.childName },
                })
              }
            >
              <ChildrenCard
                isWithdraw={child.parent.isWithdraw}
                childName={child.childName}
                studentLessonId={child.studentLessonId}
              />
            </div>
          ))
        ) : (
          <NoChild />
        )}
      </div>
    </>
  );
};
