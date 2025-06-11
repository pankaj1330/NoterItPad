import { useState } from "react";

function useModalState<T>(){
    const [isModalOpen,setModalOpen] = useState<boolean>(false);

    const [modalData,setModalData] = useState<T | null>(null);

    const closeModal = () => {
        setModalData(null);
        setModalOpen(false);
        return;
    }

    const openModal = (data : T) => {
        setModalData(data);
        setModalOpen(true);
        return;
    }

    return {
        isModalOpen,
        closeModal,
        openModal,
        modalData
    }
}

export default useModalState