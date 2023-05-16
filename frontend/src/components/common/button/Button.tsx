import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

// import 예시 : 원하는 버튼 아래처럼 import
// import {LongButton,ShortButtonHug,ShortButtonFixed} from "../../components/button/Button";

// 사용 예시 : variant로 버튼 색 지정
// <LongButton variant="primary"><NavLink to="tutor">강사</NavLink></LongButton>
{
  /* <LongButton variant="custom" customColor="#F04500">
커스텀 색상 지정 시 이렇게 사용해 주세요
</LongButton> */
}

// 비활성화 버튼 사용 시 예시
{
  /* <LongButton disabled={true}>비활성화된 버튼</LongButton>; */
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'success' | 'custom';
  customColor?: string;
}

//LongButton
export const LongButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  customColor,
  children,
  className,
  disabled = false,
  ...props
}) => {
  const buttonClass = `${styles.LongButton} ${styles[variant]} ${
    className ? className : ''
  } ${disabled ? styles.disabled : ''}`.trim();

  const buttonStyle =
    variant === 'custom' ? { backgroundColor: customColor } : {};

  return (
    <button
      className={buttonClass}
      style={buttonStyle}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

//ShortButtonHug 글자 길이에 따라 늘어나는 버튼
export const ShortButtonHug: React.FC<ButtonProps> = ({
  variant = 'primary',
  customColor,
  children,
  className,
  disabled = false,
  ...props
}) => {
  const buttonClass = `${styles.ShortButtonHug} ${styles[variant]} ${
    className ? className : ''
  } ${disabled ? styles.disabled : ''}`.trim();

  const buttonStyle =
    variant === 'custom' ? { backgroundColor: customColor } : {};

  return (
    <button
      className={buttonClass}
      style={buttonStyle}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// 글자길이와 상관없이 10%의 길이, 최소 5rem,최대8rem, 글자가 길면 잘리고 ...으로 변환
export const ShortButtonFixed: React.FC<ButtonProps> = ({
  variant = 'primary',
  customColor,
  children,
  className,
  disabled = false,
  ...props
}) => {
  const buttonClass = `${styles.ShortButtonFixed} ${styles[variant]} ${
    className ? className : ''
  } ${disabled ? styles.disabled : ''}`.trim();

  const buttonStyle =
    variant === 'custom' ? { backgroundColor: customColor } : {};

  return (
    <button
      className={buttonClass}
      style={buttonStyle}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

//ShortButtonHug 글자 길이에 따라 늘어나는 버튼
export const ShortButtonHugSmall: React.FC<ButtonProps> = ({
  variant = 'primary',
  customColor,
  children,
  className,
  disabled = false,
  ...props
}) => {
  const buttonClass = `${styles.ShortButtonHugSmall} ${styles[variant]} ${
    className ? className : ''
  } ${disabled ? styles.disabled : ''}`.trim();

  const buttonStyle =
    variant === 'custom' ? { backgroundColor: customColor } : {};

  return (
    <button
      className={buttonClass}
      style={buttonStyle}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};