import movingeducell from '../../assets/images/movingeducell.gif';
import styles from './Loading.module.scss';

export const Loading = () => {
  return (
    <>
      <div className={styles['loading-container']}>
        <img src={movingeducell} alt="Loading..." />
        <p>로딩중...잠시만 기다려주세요!</p>
      </div>
    </>
  );
};
