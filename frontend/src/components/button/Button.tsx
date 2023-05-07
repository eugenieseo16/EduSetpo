import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "red" | "success";
}

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
