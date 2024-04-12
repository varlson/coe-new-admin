import Button from "@/components/ui/Button/Button";
import DefaultBtn from "@/components/ui/Button/DefaultBtn";
import { DefaultModalProps } from "@/types/types";

function ConfirmModal({ isOpen, setIsOpen }: DefaultModalProps) {
  const closHandle = () => {
    setIsOpen();
  };

  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center">
      <div
        onClick={() => {}}
        id="modal-bg"
        className={` ${
          isOpen ? "bg-anim" : ""
        } opacity-50 bg-blacks absolute inset-0 `}
      ></div>
      <div
        id="wrap"
        className={` ${
          isOpen ? "rot-anim" : ""
        } z-50 shadow-md  relative w-4/12 bg-white p-2 rounded confirm-modal`}
      >
        <div className="">
          <p className="text-center p-2 ">Deseja apagar ?</p>
        </div>

        <div className="flex gap-x-5 border-t mt-3 pt-3 pb-1 justify-end">
          <DefaultBtn clickAction={() => {}} color="bg-dark" label="Cancelar" />

          <DefaultBtn
            clickAction={() => {}}
            color="bg-red900"
            label="Cofirmar"
          />
        </div>
      </div>
    </div>
  );
}
export default ConfirmModal;
