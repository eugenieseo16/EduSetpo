import styles from './ParentsMain.module.scss';

import { LongButton } from '../../components/common/button/Button';
import { NavLink } from 'react-router-dom';
import ParentsHeader from '../../components/common/parentsHeader/ParentsHeader';
import logoimage from '../.././assets/images/educell.png';
import { ChildrenList } from '../../components/childrenList/ChildrenList';
import userAtom from '../../atoms/userAtom';
import { useRecoilValue } from 'recoil';

export const ParentsMain = () => {
  const user = useRecoilValue(userAtom);

  const parentname = user?.userName || '정보없음';
  console.log(user);

  return (
    <>
      <div>
        <ParentsHeader
          mainTitle={`${parentname}님,`}
          subTitle="안녕하세요"
          logoimage={logoimage}
        />
        <div className={styles['child-list-container']}>
          <h3 className={styles['child-list-title']}>내 아이 목록</h3>
          <ChildrenList />
        </div>
        <div className={styles['add-child-button-container']}>
          <LongButton variant="success">
            <NavLink to="addchild">+ 내 아이 추가하기</NavLink>
          </LongButton>
        </div>
      </div>
    </>
  );
};
