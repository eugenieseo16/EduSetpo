import { NavLink } from 'react-router-dom';
import { LongButton } from '../../common/button/Button';
import styles from './ChildrenList.module.scss';

export const ChildrenList = () => {
  return (
    <>
      <div className={styles['parentsmain-container']}>
        {/* 만약에 아이가 없다면 */}
        <LongButton variant="success">
          <NavLink to="addchild">+ 내 아이 추가하기</NavLink>
        </LongButton>
      </div>
    </>
  );
};
