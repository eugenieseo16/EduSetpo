import { useState } from "react";

import style from "./Modal.module.scss";

interface ModalProps {
  text: string;
}

function Modal({ text }: ModalProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <button onClick={handleModal}>{text}</button>
      {openModal ? (
        <div>
          <div
            className={style.ModalBackground}
            onClick={handleCloseModal}
          ></div>

          <div className={style.Modal}>
            <h1>모달의 제목을 입력해주세요플레</h1>
            <p>모달의 내용을 입력해주시면 됩니다람쥐</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Modal;
