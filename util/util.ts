import { weekDay } from "@/constants/constants";
import { IPost, PostTypes } from "@/types/types";
import * as fs from "fs";

export const textSplitter = (text: string, size = 150) => {
  if (text.length >= size) {
    return text.substring(0, size) + "...";
  }

  return text;
};

export const dateFormater = (date_str: string) => {
  const date = new Date(date_str);
  const [year, month, day, week] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    weekDay[date.getDay()],
  ];

  const formared = `${week.split("-")[0]}, ${day}-${month}-${year}`;
  return formared;
};

export const postFormDataBuilder = (
  post: Partial<IPost>,
  postType: PostTypes,
  file: File | null,
  noticeNumber: string,
  autor: string
) => {
  const data = new FormData();
  data.set("body", post?.body as string);
  data.set("title", post.title as string);
  data.set("resumo", post.resumo as string);
  data.set("postType", postType.toString());
  data.set("author", autor);
  data.set("noticeNumber", noticeNumber);
  if (file) {
    data.append("file", file);
  }

  return data;
};

export type PostError = {
  title: string;
  body: string;
  resumo: string;
  file: string;
};

export const PostValidation = (
  data: Partial<IPost>,
  error: PostError,
  file: File | null
) => {
  var thereIsError: boolean = false;
  const { title, body, resumo } = data;

  Object.entries({ title, body, resumo }).map(([key, value]) => {
    const objKey = key as keyof PostError;

    if (!value || value == "" || typeof value == undefined) {
      error[objKey] = `O campo '${key}' é obrigatório!`;
      thereIsError = true;
    } else {
      error[objKey] = "";
      thereIsError = false;
    }

    if (value.length < 100) {
      error[objKey] = `A quantidade de caracter mínimo para '${key}' é de 100!`;
      thereIsError = true;
    }
  });

  if (!file || file == null || typeof file == undefined) {
    thereIsError = true;
    error.file = "Por favor, adicione uma imgagem!";
  } else {
    error.file = "";
    thereIsError = false;
  }

  return { error, thereIsError };
};

export const validateImageResolution = async (image: string) => {
  const img: any = new Image();

  img.onload = function (this: HTMLImageElement) {
    const wid = this.width;
    const hei = this.height;

    if (wid < 800) {
      console.log("A largura mínima para imagem é de 800 pixel");
      return "A largura mínima para imagem é de 800 pixel";
    }

    if (hei < 500) {
      console.log("A largura mínima para imagem é de 800 pixel");

      return "A altura mínima para imagem é de 500 pixel";
    }
  };

  img.src = image;

  return null;
};

// Função para ler o arquivo como blob
export async function readFileAsBlob() {
  const imagePath =
    "/home/varlson/codes/new-coe/coe-admin/public/imgs/edital.png";
  return fetch(imagePath)
    .then((response) => response.blob())
    .then((blob) => blob);
}
