import React from "react";
import style from "./LoginModal.module.css";
import { ShortButtonHug } from '../../common/button/Button';
import sadEducell from "../../../assets/images/sadeducell.png";

interface LoginModalProps {
  message: string;
  isOpen: boolean;
  handleClose: () => void;
}


export const LoginModal: React.FC<LoginModalProps> = ({
  message, isOpen, handleClose
}) => {

  return (
    <>
      {isOpen && (
        <div className={style.modalOverlay}>
          <div className={style.alertModalContainer}>
            <p>
              {message}
              <div>
                <img src={sadEducell} />
              </div>
              <ShortButtonHug onClick={() => handleClose()}>확인</ShortButtonHug>
            </p>
          </div>
        </div>
      )}
    </>
  )
}