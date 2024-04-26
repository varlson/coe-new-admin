import Image from "next/image";
import React from "react";

function ToImage() {
  return (
    <div
      id="my-image"
      className="relative  edital m-auto w-[900px] p-4 h-[500px] rounded shadow-md bg-gradient-to-r from-slate-300 to-red-200  flex items-center jus justify-evenly -around"
    >
      <Image
        height={1000}
        width={1000}
        className="object-fill  h-full  w-auto"
        src="/imgs/edital.png"
        alt=""
      />
      <div className=" -ml-[150px]">
        <div className="font-bold text-white bg-red-900 px-6 py-2 rounded flex flex-col ">
          <p className="text-[100px] uppercase font-play_fair  ">Edital</p>
          <p className="text-white text-right font-jura">2024/002S</p>
        </div>
      </div>
    </div>
  );
}

export default ToImage;
