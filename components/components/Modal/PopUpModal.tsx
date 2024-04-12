"use client";
import { DefaultModalProps } from "@/types/types";
import { useEffect } from "react";

function PopUpModal({ isOpen, setIsOpen, msg }: DefaultModalProps) {
  useEffect(() => {
    setTimeout(() => {
      setIsOpen();
    }, 5000);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center">
      <div
        onClick={() => {}}
        id="modal-bg"
        className={` ${
          isOpen ? "bg-anim" : ""
        } opacity-80 bg-blacks absolute inset-0 `}
      ></div>
      <div
        id="wrap"
        className={` ${
          isOpen ? "rot-anim" : ""
        } z-50 shadow-md  relative w-4/12 bg-white p-2 rounded confirm-modal`}
      >
        <div className="flex gap-x-5 border-t mt-3 pt-3 pb-1 justify-center">
          <p className="text-xl text-center text-red900">{msg}</p>
        </div>
      </div>
    </div>
  );
}
export default PopUpModal;
