"use client";
import Modal from "@/components/partials/modal/Modal";
import PostCard from "@/components/partials/postCard/PostCard";
import Icons from "@/components/ui/Icons/Icons";
import Spinner from "@/components/ui/Spinner/Spinner";
import { deletePosts, fetchPosts } from "@/services/endpoint";
import { IconTypes, IPost, ModalTypes, PostTypes } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const router = useRouter();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const deleteHandle = async (id: string) => {
    setDeleteEditLoader(true);
    await deletePosts(id);
    setDeleteEditLoader(false);
    setPopUpMsg(true);
    setTimeout(async () => {
      setPopUpMsg(false);
      await loadPosts();
    }, 1000);
  };
  const editHandle = async (id: string) => {};

  const [deleteEditLoader, setDeleteEditLoader] = useState(false);
  const [popUpMsg, setPopUpMsg] = useState(false);

  const loadPosts = async () => {
    const lan = localStorage.getItem("lan") || "pt";
    const resp = await fetchPosts(PostTypes.ALL, lan);
    if (resp.status) {
      setPosts(resp.posts);
    } else {
      setErrorMsg(resp.error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const loadDatas = async () => {
      await loadPosts();
    };
    if (!posts.length) {
      loadDatas();
    }
  }, [posts]);

  if (isLoading && (!posts.length || !errorMsg)) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner color="red" sizes={{ hei: "100", wid: "100" }} />
      </div>
    );
  }
  return (
    <>
      <Modal
        modalType={ModalTypes.SpinnerModal}
        isOpen={deleteEditLoader}
        setIsOpen={() => {}}
      />
      <Modal
        modalType={ModalTypes.PopUpModal}
        isOpen={popUpMsg}
        setIsOpen={() => {}}
        msg="Deletado com sucesso!"
      />
      <div className="flex gap-x-2">
        <div className="bg-red900 self-start rounded">
          <Icons
            link="slides/add"
            label="Adicionar"
            type={IconTypes.Clickable}
            alt=""
            src="add"
          />
        </div>

        <div className="bg-red900 min-h-screen flex-1 p-4 flex flex-wrap gap-4 justify-between">
          {!errorMsg ? (
            posts.map((item, index) => (
              <div key={index}>
                <PostCard
                  post={item}
                  editHandle={editHandle}
                  deleteHandle={deleteHandle}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-white">{errorMsg}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
