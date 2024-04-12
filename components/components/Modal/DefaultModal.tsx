import { DefaultModalProps } from "@/types/types";

function DefaultModal({ isOpen, setIsOpen, children }: DefaultModalProps) {
  const closHandle = () => {
    const wrap = document.getElementById("wrap") as HTMLDivElement;
    wrap.classList.add("close-anim");
    setTimeout(() => {
      setIsOpen();
      wrap.classList.remove("close-anim");
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center">
      <div
        onClick={closHandle}
        id="modal-bg"
        className={` ${
          isOpen ? "bg-anim" : ""
        } opacity-50 bg-blacks absolute inset-0 `}
      ></div>
      <div
        id="wrap"
        className={` ${
          isOpen ? "rot-anim" : ""
        } z-50 relative md:w-9/12 bg-white `}
      >
        <div className="shadow-md bg-zync-300 border-b p-2 flex ">
          <p className="text-center font-bold flex-1">Modal Title</p>
          <p
            onClick={closHandle}
            className=" active:scale-110 transition duration-300	 ease-in-out  px-4 py-1 bg-red-500 text-white rounded cursor-pointer"
          >
            X
          </p>
        </div>

        <div className="px-2 py-5">{children}</div>
      </div>
    </div>
  );
}

export default DefaultModal;
