"use client";
import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
type ButtonPropType = {
  label: string;
  link: string;
  type: "submit" | "reset" | "button" | undefined;
  style: string;
  isClicked?: boolean;
};

function Button({ type, label, style, isClicked }: ButtonPropType) {
  const _isClicked = typeof isClicked == undefined ? false : isClicked;
  return (
    <button
      className={`px-4 py-2 rounded my-5 justify-center flex ${style}`}
      type={type}
    >
      {_isClicked ? (
        <Spinner color="red" sizes={{ hei: "40", wid: "40" }} />
      ) : (
        label
      )}
    </button>
  );
}

export default Button;
