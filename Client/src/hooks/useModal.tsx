import { useState } from "react";
import Modal from "../components/Modal";

export const useModal = () => {
  /* 
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (Component, props) => {
    open(Component, props);
  };

  const closeModal = (Component) => {
    close(Component)
  }
  */

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return {
    Modal,
    isModalOpen,
    openModal,
    closeModal,
  };
};


