import ConfirmModal from "@/components/components/Modal/ConfirmModal";
import DefaultModal from "@/components/components/Modal/DefaultModal";
import PopUpModal from "@/components/components/Modal/PopUpModal";
import SpinnerModal from "@/components/components/Modal/SpinnerModal";
import { ModalProps, ModalTypes } from "@/types/types";

const ModalSwitcher = (modalType: ModalTypes) => {
  const modals = {
    1: ConfirmModal,
    2: DefaultModal,
    3: SpinnerModal,
    4: PopUpModal,
  };

  return modals[modalType];
};

function Modal({ isOpen, setIsOpen, modalType, children, msg }: ModalProps) {
  if (modalType == ModalTypes.DefaultModal) {
    return (
      <DefaultModal isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </DefaultModal>
    );
  } else if (modalType == ModalTypes.ConfirmModal) {
    return <ConfirmModal isOpen={isOpen} setIsOpen={setIsOpen} />;
  } else if (modalType == ModalTypes.SpinnerModal) {
    return <SpinnerModal isOpen={isOpen} setIsOpen={() => {}} />;
  } else {
    return <PopUpModal msg={msg} isOpen={isOpen} setIsOpen={() => {}} />;
  }
}

export default Modal;
