import styles from './ParentsMain.module.scss';

import { LongButton } from '../../components/common/button/Button';
import { NavLink } from 'react-router-dom';
import ParentsHeader from '../../components/common/parentsHeader/ParentsHeader';
import logoimage from '../.././assets/images/educell.png';

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
        <LongButton variant="success">
          <NavLink to="addchild">+ 내 아이 추가하기</NavLink>
        </LongButton>
      </div>
    </>
  );
};
