import styles from './ParentsEditMenu.module.scss';

interface MenuProp {
  menuName: string;
}

export const ParentsEditMenu: React.FC<MenuProp> = ({ menuName }) => {
  return (
    <div className={styles['MenuWrapper-parent']}>
      <div className={styles.MenuName}>{menuName}</div>
    </div>
  );
};
