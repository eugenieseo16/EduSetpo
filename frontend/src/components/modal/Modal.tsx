import React, { useState } from "react";

import style from "./Modal.module.scss";

function Modal() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <button onClick={handleModal}>모달을 열어용</button>
      {openModal ? (
        // 모달 창 외부를 클릭하면 모달창 닫히는 액션 추가
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
