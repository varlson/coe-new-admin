"use client";
import React from "react";
type BtnProps = {
  label: string;
  action: () => void;
  color: string;
};
function LoaderBtn({ color, action, label }: BtnProps) {
  const btnClickHandle = () => {
    action();
  };
  return (
    <button
      onClick={btnClickHandle}
      className={`px-4 py-2  rounded ${color} min-w-24 text-white`}
    >
      {label}
    </button>
  );
}

export default LoaderBtn;
