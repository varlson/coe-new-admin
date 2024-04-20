"use client";
import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
type BtnProps = {
  label: string;
  clickAction: () => void;
  color: string;
};
function DefaultBtn({ color, clickAction, label }: BtnProps) {
  const [disabled, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const btnClickHandle = () => {
    // setDisable(true);
    // setLoading(true);
    clickAction();
  };
  return (
    <div className="w-full">
      <button
        type="submit"
        disabled={disabled}
        onClick={btnClickHandle}
        className={`px-4 py-2 w-full rounded flex justify-center ${
          disabled ? "bg-red-300" : color
        } min-w-24 text-white`}
      >
        {loading ? (
          <Spinner color="white" sizes={{ hei: "30", wid: "30" }} />
        ) : (
          label
        )}
      </button>
    </div>
  );
}

export default DefaultBtn;
