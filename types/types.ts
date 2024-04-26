import { CheckBoxType } from "./types";
import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  password: string;
  avatar: string;
  activityStatus: boolean;
  createdAt: Date;
  updatedAt: Date;
  premissionRole: number;
  passRecovery?: string;
}

export interface IPost {
  noticeNumber?: string;
  title: string;
  img: string;
  body: string;
  resumo: string;
  createdAt?: Date;
  updatedAt?: Date;
  postType: number;
  author: IUser["_id"];
  edit_by?: IUser["_id"];
  tags: string[];
  slug: string;
  author_name: string;
  _id: string;
}

export enum PostTypes {
  SLIDE = 1,
  NEWS,
  NOTICE,
  SLIDE_AND_NEWS,
  SLIDE_AND_NOTICE,
  NOTICE_AND_NEWS,
  ALL,
}

export enum IconTypes {
  DefaultIcon = 1,
  Clickable,
  WithLoader,
}

export enum ModalTypes {
  ConfirmModal = 1,
  DefaultModal,
  SpinnerModal,
  PopUpModal,
}

export interface DefaultModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children?: React.ReactNode;
  msg?: string;
}

export interface ModalProps extends DefaultModalProps {
  modalType: ModalTypes;
}

export interface PopUpProps extends ModalProps {
  msg: string;
}

export type PostFormType = {
  title: {
    text: string;
    error: boolean;
    errorMsg: string;
    min: number;
    max: number;
  };

  resumo: {
    text: string;
    error: boolean;
    errorMsg: string;
    min: number;
    max: number;
  };
  body: {
    text: string;
    error: boolean;
    errorMsg: string;
    min: number;
    max: number;
  };
};

export const defaultFormValues: PostFormType = {
  title: {
    text: "",
    error: true,
    errorMsg: "",
    min: 20,
    max: 100,
  },

  resumo: {
    text: "",
    error: true,
    errorMsg: "",
    min: 300,
    max: 10000,
  },
  body: {
    text: "",
    error: true,
    errorMsg: "",
    min: 300,
    max: 10000,
  },
};

export type InputFileType = {
  file: File | null;
  error: boolean;
  errorMsg: string;
};

export const defaultInputFile = {
  file: null,
  error: true,
  errorMsg: "Por favor,insira uma imagem",
};

export type CheckBoxType = {
  news: boolean;
  slide: boolean;
  notice: boolean;
};

export const defaultCheckboxValues: CheckBoxType = {
  slide: false,
  news: false,
  notice: false,
};

export enum PremissionRoles {
  SUPER_ADMIN = 1,
  ADMIN,
}
