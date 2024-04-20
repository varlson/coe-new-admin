"use client";
import { CheckBoxType, defaultCheckboxValues } from "@/types/types";
import React, { ChangeEvent, useState } from "react";

type CheckBoxProps = {
  checkbox: CheckBoxType;
  setCheckBox: (e: ChangeEvent<HTMLInputElement>) => void;
  noticeNumber: string;
  noticeNumberHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

function CheckBox({
  checkbox,
  setCheckBox,
  noticeNumber,
  noticeNumberHandler,
}: CheckBoxProps) {
  const chackboxChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckBox(e);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-x-4 justify-between">
        <div>
          <div className="flex gap-x-2 w-24 justify-between ">
            <label htmlFor="news">Notícia</label>
            <input
              onChange={chackboxChangeHandle}
              checked={checkbox.news}
              type="checkbox"
              className="p-2 w-4"
              name="news"
            />
          </div>

          <div className="flex gap-x-2 w-24 justify-between">
            <label htmlFor="">Slide</label>
            <input
              checked={checkbox.slide}
              type="checkbox"
              className="p-2 w-4"
              onChange={chackboxChangeHandle}
              name="slide"
            />
          </div>

          <div className="flex gap-x-2 w-24 justify-between">
            <label htmlFor="">Edital</label>
            <input
              name="notice"
              checked={checkbox.notice}
              type="checkbox"
              className="p-2 w-4"
              onChange={chackboxChangeHandle}
            />
          </div>
        </div>
        {checkbox.notice && (
          <div className="flex items-center flex-col">
            <p className="text-center title3">Número de edital</p>
            <input
              value={noticeNumber}
              onChange={noticeNumberHandler}
              className=" font-nunito text-input h-4 w-40  text-center"
              type="text"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckBox;
