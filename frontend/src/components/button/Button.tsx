import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

// import 예시 : 원하는 버튼 아래처럼 import
// import {LongButton,ShortButtonHug,ShortButtonFixed} from "../../components/button/Button";

// 사용 예시 : variant로 버튼 색 지정
// <LongButton variant="primary"><NavLink to="tutor">강사</NavLink></LongButton>

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "success";
}
// "primary" : 파랑,  "danger": 빨강,  "success" : 초록

// LongButton : 25% 길이, 글자가 길면 잘리고 ...으로 변환
export const LongButton: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const buttonClass = `${styles.LongButton} ${styles[variant]} ${
    className ? className : ""
  }`.trim();

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

//ShortButtonHug 글자 길이에 따라 늘어나는 버튼
export const ShortButtonHug: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const buttonClass = `${styles.ShortButtonHug} ${styles[variant]} ${
    className ? className : ""
  }`.trim();

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

// 글자길이와 상관없이 10%의 길이, 최소 5rem,최대8rem, 글자가 길면 잘리고 ...으로 변환
export const ShortButtonFixed: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const buttonClass = `${styles.ShortButtonFixed} ${styles[variant]} ${
    className ? className : ""
  }`.trim();

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
