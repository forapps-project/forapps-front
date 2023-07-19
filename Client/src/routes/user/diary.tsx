import { useContext, useState } from "react";
import { useModal } from "../../hooks/useModal";
import "react-pull-to-refresh"


const Diary = () => {
  const { Modal, isModalOpen, closeModal, openModal } = useModal();

  return (
    <div >
      This is Diary page.
      <button onClick={openModal}>click</button>
      

      <Modal
      success={false}
        isModalOpen={isModalOpen}
        close={closeModal}
        label="잘못된 이메일입니다!"
      />

    </div>
  );
};

export default Diary;
