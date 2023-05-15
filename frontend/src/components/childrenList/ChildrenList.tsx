import styles from './ChildrenList.module.scss';
import { NoChild } from '../nochild/NoChild';

export const ChildrenList = () => {
  return (
    <>
      <div className={styles['parentsmain-container']}>
        {/* 만약에 아이가 없다면 */}
        <NoChild />
        {/* 만약 아이가 있다면 */}
      </div>
    </>
  );
};
