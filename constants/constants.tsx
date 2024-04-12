import { IPost, PostTypes } from "@/types/types";
import { PostError } from "@/util/util";

export const resetedCheckboxValues = {
  news: false,
  slide: false,
  notice: false,
};

export const defaultPostValues: Partial<IPost> = {
  title: "",
  resumo: "",
  body: "",
  postType: PostTypes.NEWS,
  author: "",
};

export const postWithCredentialOptions = (token: string, body: FormData) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: body,
  };

  return fetchOptions;
};

export const getWithCredentialOptions = (token: string) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return fetchOptions;
};

export const getWithNonCredentialOptions = () => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetchOptions;
};

export const weekDay = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export const defaultPostErrorValue: PostError = {
  title: "",
  body: "",
  resumo: "",
  file: "",
};
