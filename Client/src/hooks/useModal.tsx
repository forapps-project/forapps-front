import { useContext, useState } from "react";
import Modal from "../components/Modal";
import { WakeUpTimeContext } from "../contexts/wakeupTimeReducer.context";

export const useModal = () => {
  const data = useContext(WakeUpTimeContext);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const successFunc = (): void => {
    closeModal();
    localStorage.setItem('user-wakeup-time', JSON.stringify(data))
  }

  return {
    Modal,
    isModalOpen,
    openModal,
    closeModal,
    successFunc,
  };
};


