"use client";

import { signIn } from "next-auth/react";
import Button from "@/components/ui/Button/Button";
import Logo from "@/components/ui/Logo/Logo";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMailLock } from "react-icons/md";

function Page() {
  const googleLoginHandle = async () => {
    await signIn("google");
  };

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const credencialSigInhandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", credentials);
  };

  return (
    <div className="flex items-center h-full shadow-xl ">
      <div className="w-[40%] ">
        <div className="flex flex-col items-center">
          <Image
            src="/imgs/ufop.jpg"
            height={100}
            width={100}
            alt="Logo UFOP"
            className="h-[120px] w-20 object-contain"
          />
          <div className="text-center font-jura font-bold">
            <p className="">Clolegiado do Curso da Engenharia Elétrica</p>
            <p>ICEA - João Monlevade</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center px-20 py-4 h-full bg-lightRed rounded-r">
        <form onSubmit={credencialSigInhandle} className="w-full">
          <div className="">
            <label htmlFor="username">Email:</label>
            <div className=" h-10 rounded flex justify-between items-center bg-white px-2">
              <input
                placeholder="exemplo@email.com"
                name="username"
                value={credentials.username}
                onChange={changeHandle}
                className="flex-1  px-4 my-4 py-2"
                type="email"
                required
              />
              <MdOutlineMailLock className="text-4xl " />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="username">Senha:</label>
            <div className=" h-10 rounded flex justify-between items-center bg-white px-2">
              <input
                placeholder="password"
                name="password"
                value={credentials.password}
                onChange={changeHandle}
                className="flex-1  px-4 my-4 py-2"
                type="password"
                required
              />
              <CiLock className="text-4xl " />
            </div>
          </div>
          <div className="mt-2 flex  justify-between items-center">
            <Button
              type="submit"
              label="Entrar com credencial"
              style="bg-dark text-white"
            />

            <div
              onClick={googleLoginHandle}
              className="flex gap-x-4 cursor-pointer px-4 py-2 rounded bg-red700 text-white"
            >
              <p>Entrar com</p>
              <FcGoogle className="text-2xl" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
