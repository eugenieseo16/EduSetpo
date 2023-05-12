import styles from './ParentsMain.module.scss';

import { LongButton } from '../../components/common/button/Button';
import { NavLink } from 'react-router-dom';
import ParentsHeader from '../../components/common/parentsHeader/ParentsHeader';
import logoimage from '../.././assets/images/educell.png';
import { ChildrenList } from '../../components/addchild/childrenList/ChildrenList';

export const ParentsMain = () => {
  const parentname = '서삼이들';

  return (
    <>
      <ParentsHeader
        mainTitle={`${parentname}님,`}
        subTitle="안녕하세요"
        logoimage={logoimage}
      />
      <div className={styles['parentsmain-container']}>
        <h3>내 아이 목록</h3>
        <ChildrenList />
      </div>
    </>
  );
};
