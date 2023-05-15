import React from 'react';
import styles from './ParentsHeader.module.scss';

// 사용법 :  <ParentsHeader title={`Welcome, ${name}!\nThis is my website.`} />

interface ParentsHeaderProps {
  mainTitle: string;
  subTitle?: string;
  logoimage?: string;
}

const ParentsHeader: React.FC<ParentsHeaderProps> = ({
  mainTitle,
  subTitle = '',
  logoimage,
}) => {
  return (
    <header className={styles['parents-header']}>
      <div>
        <h2>{mainTitle}</h2>
        {/*  subTitle이 있을 경우에만 렌더링 */}
        {subTitle && <h3 className={styles['sub-title']}>{subTitle}</h3>}
      </div>

      {logoimage && ( // logo가 존재하면 img 태그를 렌더링합니다.
        <div className={styles['logo-container']}>
          <img src={logoimage} alt="logoimage" className={styles.logo} />
        </div>
      )}
    </header>
  );
};

export default ParentsHeader;
