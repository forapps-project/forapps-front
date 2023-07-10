import { useContext, useState } from "react";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import ModalsProvider, { ModalsDispatchContext, ModalsStateContext } from "../../contexts/modalContext";
import ReactModal from "react-modal";


const Diary = () => {
  const { Modal, isModalOpen, closeModal, openModal } = useModal();
  //const { openModal, closeModal } = useContext(ModalsDispatchContext);
  //const [isOpen,setIsopen] = useState(false)

  return (
    <div>
      This is Diary page.
      <button onClick={openModal}>click</button>
      
      <Modal
        isModalOpen={isModalOpen}
        close={closeModal}
        label="잘못된 이메일입니다!"
      />
      {/* <ReactModal isOpen={isOpen} className={"modal-box"} overlayClassName={"dimmed"}>
      </ReactModal>
      <button onClick={()=>setIsopen(true)}>Test</button> */}

    </div>
  );
};

export default Diary;
