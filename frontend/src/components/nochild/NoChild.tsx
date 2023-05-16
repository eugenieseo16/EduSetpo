import styles from './NoChild.module.scss';
import sadlogoImage from '../.././assets/images/sadeducell.png';

export const NoChild = () => {
  return (
    <>
      <div className={styles['no-child-container']}>
        <img src={sadlogoImage} className={styles['logo-image']} alt="logo" />
        아직 등록된 아이가 없어요 ㅠ.ㅠ
      </div>
    </>
  );
};
