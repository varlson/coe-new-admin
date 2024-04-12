"use client";
import React, { useState } from "react";
type BtnProps = {
  label: string;
  clickAction: () => void;
  color: string;
};
function DefaultBtn({ color, clickAction, label }: BtnProps) {
  const [disabled, setDisable] = useState(false);
  const btnClickHandle = () => {
    // setDisable(true);
    clickAction();
  };
  return (
    <button
      disabled={disabled}
      onClick={btnClickHandle}
      className={`px-4 py-2  rounded ${
        disabled ? "bg-gray-400" : color
      } min-w-24 text-white`}
    >
      {label}
    </button>
  );
}

export default DefaultBtn;
