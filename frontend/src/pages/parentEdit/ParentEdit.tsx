import { NavLink } from 'react-router-dom';
import { BigIconNoEdit } from '../../components/common/userIcon/UserIcon';
import styles from './ParentEdit.module.scss';
import { LongButton } from '../../components/common/button/Button';
import { ParentsEditMenus } from '../../components/parentsMenu/ParentsEditMenus.tsx/ParentsEditMenus';
import { useRecoilValue } from 'recoil';
import { parentInfoState } from '../../atoms/user.atom';

export const ParentEdit = () => {
  const parentInfo = useRecoilValue(parentInfoState);
  const userName = parentInfo.name;

  return (
    <>
      <div className={styles.MainWrapper}>
        <BigIconNoEdit />
        <div className={styles['username-container']}>{userName} </div>
        <div className={styles.forSpacing} />
        <ParentsEditMenus />
      </div>
    </>
  );
};
