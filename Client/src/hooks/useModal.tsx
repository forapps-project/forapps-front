import { useState } from 'react';
import ModalAlert from '../components/modalAlert.component';


export const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = ():void => {
      setIsModalOpen(true);
    };
    const closeModal = ():void => {
      setIsModalOpen(false);
    };

    return {
        ModalAlert,
        isModalOpen,
        openModal,
        closeModal
    };
}

