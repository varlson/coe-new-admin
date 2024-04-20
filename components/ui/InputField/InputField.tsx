import { PostFormType } from "@/types/types";
import React, { ChangeEvent } from "react";
import UploadedImage from "../UploadedImage/UploadedImage";

type InputFileProp = {
  formKey: "file";
  form: PostFormType;
};

type InputTextProps = {
  formKey: "title" | "resumo" | "body";
  form: PostFormType;
  changeHandle: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

function InputField({ formKey, form, changeHandle }: InputTextProps) {
  const onChangeHandle = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    changeHandle(e);

    const field = document.getElementById("field") as HTMLTextAreaElement;

    if (field) {
      field.style.height = field.scrollHeight + "px";
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-y-2 mt-5">
        <label className="title2 capitalize" htmlFor="resume">
          {`${formKey} do Post`}
        </label>
        <textarea
          id="field"
          rows={3}
          className={`text-justify text-input border rounded-md ${
            form[formKey].error && form[formKey].text.length >= 1
              ? "border-red-600"
              : ""
          } `}
          placeholder="Entre com o resumo do post "
          name={formKey}
          value={form[formKey].text}
          onChange={onChangeHandle}
        />
        {form[formKey].error && form[formKey].text.length >= 1 && (
          <p className="mx-4 text-error">{form[formKey].errorMsg}</p>
        )}
      </div>
    </div>
  );
}

export default InputField;
