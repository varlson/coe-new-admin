"use client";
import React from "react";
import { FaUserLarge } from "react-icons/fa6";

function UserControl() {
  const expandConfigs = () => {
    const configs = document.getElementById("configs") as HTMLDivElement;
    if (configs) {
      if (!configs.style.maxHeight || configs.style.maxHeight == "0px") {
        configs.style.maxHeight = configs.scrollHeight + "px";
      } else {
        configs.style.maxHeight = "0px";
      }
    }
  };

  return (
    <div className="">
      <div
        onClick={expandConfigs}
        className=" items-center gap-x-5 flex border border-slate-600 min-w-[150px] cursor-pointer shadow py-1 px-2 rounded"
      >
        <div className="rounded-full w-[40px] flex items-center justify-center h-[40px] border border-slate-600">
          <FaUserLarge className="text-xl" />
        </div>
        <p className="">Fernando</p>
      </div>
      <div
        id="configs"
        className="mt-2 w-[150px] fixed configs transition-all duration-200"
      >
        <ul className="bg-dark p-2 flex flex-col gap-y-1">
          <li className="hover:bg-zinc-700 p-1 rounded cursor-pointer">
            Conta
          </li>
          <li className="hover:bg-zinc-700 p-1 rounded cursor-pointer">
            Configuraçõs
          </li>
          <li className="hover:bg-zinc-700 p-1 rounded cursor-pointer">Sair</li>
        </ul>
      </div>
    </div>
  );
}

export default UserControl;
