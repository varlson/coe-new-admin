"use client";
import Modal from "@/components/partials/modal/Modal";
import DefaultBtn from "@/components/ui/Button/DefaultBtn";
import CheckBox from "@/components/ui/CheckBox/Page";
import InputField from "@/components/ui/InputField/InputField";
import UploadedImage from "@/components/ui/UploadedImage/UploadedImage";
import { createPosts } from "@/services/endpoint";
import {
  CheckBoxType,
  defaultCheckboxValues,
  defaultFormValues,
  defaultInputFile,
  InputFileType,
  IPost,
  ModalTypes,
  PostFormType,
  PostTypes,
} from "@/types/types";
import { postFormDataBuilder } from "@/util/util";
import { useParams, useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

function Form({ toEdit, id }: { toEdit: boolean | null; id: string | null }) {
  const [currentPostType, setCurrentPostType] = useState<PostTypes>(
    PostTypes.SLIDE
  );
  const router = useRouter();
  const [postForm, setPostForm] = useState(defaultFormValues);
  const [formImag, setFormImg] = useState<InputFileType>(defaultInputFile);
  const [fetchError, setFetchError] = useState<string>(
    "Ocorreu um erro interno"
  );
  const [checkbox, setCheckBox] = useState({
    ...defaultCheckboxValues,
    news: true,
  });
  const [noticeNumber, setNoticeNumber] = useState(
    new Date(Date.now()).getFullYear() + "/"
  );

  const [isLoading, setIsLoading] = useState(false);
  const [popOup, setPopOup] = useState(false);

  const noticeNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNoticeNumber(value);
  };

  const chackboxChangeHandle = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setCheckBox(defaultCheckboxValues);
    setCheckBox({ ...defaultCheckboxValues, [name]: true });

    setCurrentPostType(name == "slide" ? 1 : name == "news" ? 2 : 3);
  };

  const isPostValid = async () => {
    var isValid = true;
    await Object.entries(postForm).forEach(([key, value]) => {
      if (value.error) {
        isValid = false;
      }
    });

    if (formImag.error) {
      isValid = false;
    }

    console.log(isValid ? "valido" : "invalido");
    return isValid;
  };

  const fileSetter = (file: File | null, error: string) => {
    if (!file) {
      setFormImg((prevFormData) => ({
        ...prevFormData,
        file: null,
        error: true,
        errorMsg: error,
      }));
    } else {
      setFormImg((prevFormData) => ({
        ...prevFormData,
        file: file,
        error: false,
        errorMsg: "",
      }));
    }
  };

  const setter = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name == "title" || name == "body" || name == "resumo") {
      setPostForm((prevFormData) => ({
        ...prevFormData,
        [name]: {
          ...prevFormData[name],
          text: value,
        },
      }));

      if (value.length < postForm[name].min) {
        setPostForm((prev) => ({
          ...prev,
          [name]: {
            ...prev[name],
            errorMsg: `O mínimo do caracter requerido é de ${prev[name].min}`,
            error: true,
          },
        }));
      } else {
        setPostForm((prev) => ({
          ...prev,
          [name]: {
            ...prev[name],
            errorMsg: ``,
            error: false,
          },
        }));
      }
    }
  };

  const inputChangeHandler = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    await setter(e);
  };

  const submitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ formImag, postForm, currentPostType });

    if (await isPostValid()) {
      setIsLoading(true);
      const post: Partial<IPost> = {
        title: postForm.title.text,
        resumo: postForm.resumo.text,
        body: postForm.body.text,
      };
      const data = postFormDataBuilder(
        post,
        currentPostType,
        formImag.file,
        PostTypes.NOTICE ? noticeNumber : "",
        "6500f21b5ba6f711993f5c15"
      );
      const resp = await createPosts(data);
      if (resp.status) {
        setIsLoading(false);
        console.log(resp);
        router.push("/slides");
      } else {
        setFetchError(resp.error);
        console.log(resp);

        setPopOup(true);
        setTimeout(() => {
          setPopOup(false);
        }, 1500);

        setIsLoading(false);
      }

      console.log("pass");
    } else {
      console.log("reproved ");
    }
  };

  return (
    <div className="w-10/12 m-auto">
      <Modal
        setIsOpen={() => {}}
        isOpen={isLoading}
        modalType={ModalTypes.SpinnerModal}
      />

      <Modal
        setIsOpen={() => {}}
        isOpen={popOup}
        modalType={ModalTypes.PopUpModal}
        msg=""
      />

      <p className="title1 text-white text-center bg-red700 p-2 rounded">
        Adicione Post
      </p>
      <form onSubmit={submitHandle} className="bg p-2" action="">
        <CheckBox
          noticeNumber={noticeNumber}
          setCheckBox={chackboxChangeHandle}
          noticeNumberHandler={noticeNumberHandler}
          checkbox={checkbox}
        />
        <InputField
          formKey="title"
          form={postForm}
          changeHandle={inputChangeHandler}
        />
        <InputField
          formKey="resumo"
          form={postForm}
          changeHandle={inputChangeHandler}
        />

        <InputField
          formKey="body"
          form={postForm}
          changeHandle={inputChangeHandler}
        />
        <UploadedImage
          fileType={checkbox.notice ? "application/pdf" : "image/*"}
          PostForm={postForm}
          changeHandle={fileSetter}
        />

        <div className="my-2 w-full ">
          <DefaultBtn color="bg-red-700" label="Criar" clickAction={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default Form;
