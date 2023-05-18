import styles from './NoChild.module.scss';
import sadlogoImage from '../.././assets/images/sadeducell.png';
import { LongButtonFlex } from '../common/button/Button';
import { NavLink } from 'react-router-dom';

export const NoChild = () => {
  return (
    <>
      <div className={styles['no-child-container']}>
        <img src={sadlogoImage} className={styles['logo-image']} alt="logo" />
        아직 등록된 아이가 없어요 ㅠ.ㅠ
      </div>
      {/* <LongButtonFlex variant="success" width="90%">
        <NavLink to="addchild">+ 내 아이 추가하기</NavLink>
      </LongButtonFlex> */}
    </>
  );
};
