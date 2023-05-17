import React from "react";
import style from "./SignupModal.module.css";
import { ShortButtonHug } from "../../common/button/Button";
import educell from "../../../assets/images/movingeducell.gif";
import sadEducell from "../../../assets/images/sadeducell.png";
import { useLocation, useNavigate } from "react-router-dom";

interface SignupModalProps {
  message: string;
  isOpen: boolean;
  handleClose: () => void;
  isSuccess: boolean;
  isSigned: boolean;
}

export const SignupModal: React.FC<SignupModalProps> = ({
  message, isOpen, handleClose, isSuccess, isSigned
}) => {
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[2];

  return (
    <>
      {isOpen && (
        <div className={style.modalOverlay}>
          <div className={style.alertModalContainer}>
            <p>
              {message}
              <div>
                <img src={isSuccess ? educell : sadEducell} />
              </div>
              <ShortButtonHug onClick={isSigned ? () => navigate(`/login/${location}`) : () => handleClose()}>
                확인
              </ShortButtonHug>
            </p>
          </div>
        </div>
      )}
    </>
  )
}