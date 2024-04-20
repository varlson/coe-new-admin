"use client";
import NextImage from "next/image";
import React, {
  ChangeEvent,
  MouseEvent,
  MouseEventHandler,
  useState,
} from "react";
import Icons from "../Icons/Icons";
import { IconTypes, PostFormType } from "@/types/types";

type UploadedImageProps = {
  PostForm: PostFormType;
  changeHandle: (file: File | null, error: string) => void;
  fileType: string;
};

function UploadedImage({
  PostForm,
  changeHandle,
  fileType,
}: UploadedImageProps) {
  const [blobURL, setBlobURL] = useState<null | string>(null);
  const [file, setFile] = useState<null | File>(null);
  const [imageError, setImageError] = useState<null | string>(null);

  const onHover = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.currentTarget.classList.add("opacity-100");
    const prev = e.currentTarget.previousElementSibling;
    prev?.classList.remove("opacity-0");
    prev?.classList.add("opacity-50");
  };

  const imageResolutionValidation = (_file: File) => {
    return new Promise<{ isValid: true } | { isValid: false; error: string }>(
      (resolve, reject) => {
        const img: any = new Image();
        img.onload = function (this: HTMLImageElement) {
          setImageError(null);
          const wid = this.width;
          const hei = this.height;

          if (wid < 800 || hei < 400) {
            reject({
              isValid: false,
              error:
                "A largura e altura minima para imagem deve ser de 800 pixel e 400 pixel respectivamente",
            });
          } else {
            setImageError(null);
            resolve({ isValid: true });
          }
        };

        img.src = URL.createObjectURL(_file);
      }
    );
  };

  const fileHandle = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const _file = files[0];
      imageResolutionValidation(_file)
        .then(async (resp) => {
          console.log("resp");
          console.log(resp);

          setFile(_file);
          setBlobURL(URL.createObjectURL(_file));
          changeHandle(_file, imageError ? imageError : "");
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
          setImageError(error.error);
        });
    }
  };

  const onHoverOut = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.currentTarget.classList.remove("opacity-100");
    const prev = e.currentTarget.previousElementSibling;
    prev?.classList.add("opacity-0");
    prev?.classList.remove("opacity-50");
  };

  const clearHandle = () => {
    setBlobURL(null);
    changeHandle(null, "Por favor insara nova imagem");
  };

  return (
    <>
      <p className="title2 py-3 px-4 bg-red-900 text-white my-2">
        Adicione uma imagem
      </p>
      <div>
        {!blobURL ? (
          <div className="h-60 flex items-center justify-center w-full bg-ligthDark border border-dashed">
            <label className="cursor-pointer" htmlFor="file">
              <input
                onChange={fileHandle}
                id="file"
                className="hidden"
                type="file"
                accept={fileType}
              />

              <NextImage
                id="file"
                src={"/icons/add.png"}
                alt=""
                height={768}
                width={571}
                className="h-14 w-14 rounded m-auto object-cover"
              />
            </label>
          </div>
        ) : (
          <div className="mt-5 relative">
            {blobURL && (
              <div>
                <div className="change-image inset-0 z-0 bg-black m-auto w-9/12 hover:opacity-50 opacity-0 cursor-pointer absolute"></div>
                <div
                  onMouseOver={onHover}
                  onMouseOut={onHoverOut}
                  id="change-element"
                  className="change-element absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 bg-red- "
                >
                  <div onClick={clearHandle}>
                    <Icons
                      src="upload"
                      link=""
                      type={IconTypes.DefaultIcon}
                      label=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
            <NextImage
              src={blobURL}
              alt=""
              height={768}
              width={571}
              className="h-96 w-9/12 rounded m-auto object-cover "
            />
          </div>
        )}

        {imageError && (
          <p className="ml-10 mt-1 p-2 text-error">{imageError}</p>
        )}
      </div>
    </>
  );
}

export default UploadedImage;
