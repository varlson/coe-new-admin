"use client";
import Modal from "@/components/partials/modal/Modal";
import Warnings from "@/components/partials/warnings/Warnings";
import Button from "@/components/ui/Button/Button";

import {
  defaultPostErrorValue,
  defaultPostValues,
  resetedCheckboxValues,
} from "@/constants/constants";

import { createPosts } from "@/services/endpoint";
import { IPost, ModalTypes, PostTypes } from "@/types/types";
import { postFormDataBuilder, PostValidation } from "@/util/util";
import NextImage from "next/image";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

function AddPost() {
  const [imageError, setImageError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState<Partial<IPost>>(defaultPostValues);
  const [submitBtnIsClicked, setSubmitBtnIsClicked] = useState(false);
  const [acceptableFile, setAcceptableFile] = useState<string>("image/*");

  const [chekbox, setChekbox] = useState({
    news: true,
    slide: false,
    notice: false,
  });

  const [postType, setPostType] = useState(
    chekbox.news
      ? PostTypes.NEWS
      : chekbox.notice
      ? PostTypes.NOTICE
      : PostTypes.SLIDE
  );

  const changeHandle = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const uploadFileHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const currentFile = files[0];

      // if(currentFile.size /1024 < ){

      // }else if(){

      // }

      console.log("sizes");
      console.log(currentFile.size);

      // const _img = new Image();
      const img: any = new Image();

      img.onload = function (this: HTMLImageElement) {
        setImageError(null);
        const wid = this.width;
        const hei = this.height;

        if (wid < 800) {
          setImageError("A largura mínima para imagem é de 800 pixel");
        }

        if (hei < 500) {
          setImageError("A altura mínima para imagem é de 500 pixel");
        }
      };
      img.src = URL.createObjectURL(files[0] as File);
      setFile(files[0]);
      const blobURL = URL.createObjectURL(files[0] as File);
      setBlobUrl(blobURL);
    }
  };

  const [file, setFile] = useState<null | File>(null);

  const submitHandle = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    setSubmitBtnIsClicked(true);
    e.preventDefault();

    const postValidation = PostValidation(post, defaultPostErrorValue, file);

    if (postValidation.thereIsError) {
      console.log("Com errors");
      console.log(postValidation);
      return;
    }

    const data = postFormDataBuilder(
      post,
      postType,
      file,
      "ABC12311",
      "6500f21b5ba6f711993f5c15"
    );

    console.log("Sem erro");
    console.log(data);

    // const resp = await createPosts(data);

    // if (resp.status) {
    //   await setIsLoading(false);
    //   console.log(resp);
    //   router.push("/slides");
    // } else {
    //   console.log(resp);
    //   setIsLoading(false);
    // }
  };

  const modalClose = () => {
    setIsLoading(false);
  };

  const chackboxHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (chekbox.slide || chekbox.news) {
      setAcceptableFile("image/*");
    } else {
      setAcceptableFile("application/pdf");
    }

    const { name } = e.target;
    var checkKey: keyof typeof chekbox;
    setChekbox(resetedCheckboxValues);
    setChekbox((prev) => ({
      ...prev,
      [name]: !chekbox[checkKey],
    }));
  };

  return (
    <form
      onSubmit={submitHandle}
      className=" flex flex-col bg-red-900 text-white p-10"
    >
      <Modal
        modalType={ModalTypes.SpinnerModal}
        isOpen={isLoading}
        setIsOpen={modalClose}
      />

      <div className="flex flex-col gap-y-2 ">
        <label className="title2" htmlFor="title">
          Título do Post
        </label>
        <input
          className="text-input h-10"
          placeholder="Entre com o título do post"
          type="text"
          name="title"
          value={post?.title}
          onChange={changeHandle}
          required
          maxLength={100}
        />
        <Warnings text={post.title} />
      </div>

      <div className="flex flex-col gap-y-2 mt-5">
        <label className="title2" htmlFor="resume">
          Tipo do Post
        </label>
        <div className="flex flex-col">
          <div className="flex gap-x-2 w-24 justify-between ">
            <label htmlFor="news">Notícia</label>
            <input
              onChange={chackboxHandle}
              checked={chekbox.news}
              type="checkbox"
              className="p-2 w-4"
              name="news"
            />
          </div>

          <div className="flex gap-x-2 w-24 justify-between">
            <label htmlFor="">Slide</label>
            <input
              checked={chekbox.slide}
              type="checkbox"
              className="p-2 w-4"
              onChange={chackboxHandle}
              name="slide"
            />
          </div>

          <div className="flex gap-x-2 w-24 justify-between">
            <label htmlFor="">Edital</label>
            <input
              name="notice"
              checked={chekbox.notice}
              type="checkbox"
              className="p-2 w-4"
              onChange={chackboxHandle}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 mt-5">
        <label className="title2" htmlFor="resume">
          Resumo do Post
        </label>
        <textarea
          rows={3}
          className="  text-justiry text-input"
          placeholder="Entre com o resumo do post "
          name="resumo"
          value={post?.resumo}
          onChange={changeHandle}
          required
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-5">
        <label className="title2" htmlFor="texto">
          Texto do Post
        </label>
        <textarea
          rows={10}
          className="  text-justiry text-input"
          placeholder="Entre com o resumo do post "
          name="body"
          value={post?.body}
          onChange={changeHandle}
          required
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-5">
        {!blobUrl ? (
          <div>
            <label className="title2" htmlFor="iamge">
              Adicione imagem
            </label>
            <div className=" text-red900 bg-ligthDark h-48 flex justify-center items-center">
              <input
                onChange={uploadFileHandle}
                id="myfile"
                className="hidden"
                type="file"
                name="file"
                accept={acceptableFile}
              />

              <label htmlFor="myfile">
                <div className="cursor-pointer flex flex-col items-center">
                  <NextImage
                    src="/icons/add.png"
                    className="h-10 w-10 object-contain"
                    alt=""
                    height={200}
                    width={200}
                  />
                  <p>Adicione uma imagem</p>
                </div>
              </label>
            </div>
          </div>
        ) : (
          <div className="my-5 flex">
            <NextImage
              src={blobUrl}
              alt=""
              height={768}
              width={571}
              className="h-96 w-9/12 rounded m-auto object-cover"
            />
            <button
              onClick={() => {
                setBlobUrl(null);
              }}
              className="title2 bg-ligthDark text-red900 self-center px-4 py-2 rounded"
            >
              Alterar
            </button>
          </div>
        )}
        <p>{imageError}</p>
      </div>

      <Button
        style="bg-ligthDark text-red900 title2"
        type="submit"
        label="Criar"
        link=""
        isClicked={submitBtnIsClicked}
      />
    </form>
  );
}

export default AddPost;
