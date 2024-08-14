"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function UserControl() {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState<null | string>(null);

  const session = useSession();
  const singOutHandle = async () => {
    signOut();
  };

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

  if (session.status == "loading") {
    return (
      <>
        <div className="min-w-[150px]">
          <SkeletonTheme baseColor="#1e1e1e" highlightColor="#999c97">
            <Skeleton className="h-[35px]" />
          </SkeletonTheme>
        </div>
      </>
    );
  }

  return (
    <div className="">
      <div
        onClick={expandConfigs}
        className=" items-center gap-x-5 flex border border-slate-600 min-w-[150px] cursor-pointer shadow py-1 px-2 rounded"
      >
        <div className="rounded-full w-[40px] flex items-center justify-center h-[40px] border border-slate-600">
          <FaUserLarge className="text-xl" />
        </div>
        <p className="">{session.data?.user?.name?.split(" ")[0]}</p>
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
          <li
            onClick={singOutHandle}
            className="hover:bg-zinc-700 p-1 rounded cursor-pointer"
          >
            Sair
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserControl;
