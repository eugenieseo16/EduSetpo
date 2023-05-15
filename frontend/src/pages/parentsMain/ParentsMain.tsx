import styles from './ParentsMain.module.scss';
import educell from '../../assets/images/educell.png';
import { LongButton } from '../../components/common/button/Button';
import { NavLink } from 'react-router-dom';

export const ParentsMain = () => {
  const parentname = '서삼이들';

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>{parentname}님,</h1>
        <h1>안녕하세요</h1>
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.imageContainer}>
        <img src={educell} alt="에듀셀 이미지" />
      </div>
      <LongButton variant="success">
        <NavLink to="addchild">+ 내 아이 추가하기</NavLink>
      </LongButton>
    </div>
  );
};

///8/12는1/12 여백  글자 3/12는 이미지
