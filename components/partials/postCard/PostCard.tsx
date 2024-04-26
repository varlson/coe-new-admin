"use client";
import { IPost, PostTypes } from "@/types/types";
import { dateFormater, textSplitter } from "@/util/util";
import Image from "next/image";
import React, { useState } from "react";
import DefaultBtn from "@/components/ui/Button/DefaultBtn";

type PostCardProps = {
  post: IPost;
  deleteHandle: (id: string) => Promise<void>;
  editHandle: (id: string) => Promise<void>;
};

function PostCard({ post, editHandle, deleteHandle }: PostCardProps) {
  const deletePost = async () => {
    await deleteHandle(_id);
  };
  const { _id, createdAt, author_name, img, resumo, postType } = post;
  const [modal, setModal] = useState(false);

  return (
    <div className="w-72 shadow rounded flex flex-col bg-ligthDark ">
      <Image
        src={postType == PostTypes.NOTICE ? "/imgs/edital.png" : img}
        alt=""
        height={500}
        width={500}
        className="object-cover w-full h-36"
      />
      <div className="p-2">
        <p className=" text-sm font-semibold text-justify">
          {textSplitter(resumo, 100)}
        </p>
        <div className="flex mt-2 flex justify-between font-jura">
          <p className="text-sm">
            Por{" "}
            <span className="font-bold underline">
              {author_name.split(" ")[0]}
            </span>
          </p>

          <p className="text-sm">{dateFormater(createdAt)}</p>
        </div>

        <div className="flex mt-2 mb-1 justify-between gap-x-2">
          <DefaultBtn
            label="Apagar"
            clickAction={deletePost}
            color="bg-red900"
          />
          <DefaultBtn label="Editar" clickAction={deletePost} color="bg-dark" />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
