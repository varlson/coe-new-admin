import {
  getWithCredentialOptions,
  postWithCredentialOptions,
} from "@/constants/constants";
import { IPost, PostTypes } from "@/types/types";

export const createPosts = async (content: FormData) => {
  const fetchOptions = postWithCredentialOptions("", content);

  type FetchPostType =
    | { status: true; posts: IPost }
    | { status: false; error: string };

  return new Promise<FetchPostType>(async (resolve, reject) => {
    try {
      const fetchResp = await fetch(
        `http://localhost:3210/api/posts`,
        fetchOptions
      );
      const postsResp = await fetchResp.json();

      if (postsResp.status) {
        resolve({ status: true, posts: postsResp.content });
      } else {
        reject({ status: false, error: postsResp.error });
      }
    } catch (error: any) {
      reject({ status: false, error: error.message });
    }
  });
};

export const fetchPosts = async (postType: PostTypes, lan = "pt") => {
  const fetchOptions = {
    method: "GET",
  };

  type FetchPostType =
    | { status: true; posts: IPost[] }
    | { status: false; error: string };

  return new Promise<FetchPostType>(async (resolve, reject) => {
    try {
      const fetchResp = await fetch(
        `http://localhost:3210/api/posts/${lan}/${postType}`,
        fetchOptions
      );
      const postsResp = await fetchResp.json();

      if (postsResp.status) {
        resolve({ status: true, posts: postsResp.content });
      } else {
        reject({ status: false, error: postsResp.error });
      }
    } catch (error: any) {
      reject({ status: false, error: error.message });
    }
  });
};

export const deletePosts = async (id: string) => {
  const fetchOptions = {
    method: "DELETE",
  };

  type FetchPostType =
    | { status: true; content: []; error: null }
    | { status: false; error: string };

  return new Promise<FetchPostType>(async (resolve, reject) => {
    try {
      const fetchResp = await fetch(
        `http://localhost:3210/api/delete-post/${id}`,
        fetchOptions
      );
      const postsResp = await fetchResp.json();

      if (postsResp.status) {
        resolve({ status: true, content: [], error: null });
      } else {
        reject({ status: false, error: postsResp.error });
      }
    } catch (error: any) {
      reject({ status: false, error: error.message });
    }
  });
};
