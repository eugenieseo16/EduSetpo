import React, { useState } from "react";

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
        <div
          style={{
            // 모달 스타일링
            backgroundColor: "pink",

            // 모달 틀
            borderRadius: "15px",
            padding: "15px",
            maxWidth: "800px",

            // 모달 위치 중앙으로 고정
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1>모달 띄우기 띄우기띄우기띄우기띄우기</h1>
        </div>
      ) : (
        <h1>모달 내리기</h1>
      )}
    </div>
  );
}

export default Modal;
