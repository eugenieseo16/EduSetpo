import styles from './ParentsMain.module.scss';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { LongButton } from '../../components/common/button/Button';
import { NavLink } from 'react-router-dom';
import ParentsHeader from '../../components/common/parentsHeader/ParentsHeader';
import logoimage from '../.././assets/images/educell.png';
import { ChildrenList } from '../../components/childrenList/ChildrenList';

import { parentInfoState } from '../../atoms/user.atom';
import { parentApi } from '../../api/parentApis';
import { Loading } from '../../components/loading/Loading';

export const ParentsMain = () => {
  const userInfo = useRecoilValue(parentInfoState);

  console.log('main:', userInfo);

  const parentname = userInfo?.name || '정보없음';

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
