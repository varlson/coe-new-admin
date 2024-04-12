"use client";
import { IconTypes } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";

type IconPropType = {
  type: IconTypes;
  src: string;
  alt: string;
  label: string;
  link: string;
};

function Icons({ link, type, src, alt, label }: IconPropType) {
  const [isClicked, setIsClicked] = useState(false);
  const clickHandle = () => {
    setIsClicked(true);
  };
  return (
    <>
      {type === IconTypes.Clickable && isClicked ? (
        <div className="px-4 py-2">
          <Spinner color="white" sizes={{ hei: "50", wid: "50" }} />
        </div>
      ) : (
        <Link href={link}>
          <div
            onClick={clickHandle}
            className=" flex flex-col items-center px-4 py-2"
          >
            <Image
              className="h-12 w-12 object-contain"
              src={`/icons/${src}.png`}
              height={200}
              width={200}
              alt={alt}
            />
            <p className="title2">{label}</p>
          </div>
        </Link>
      )}
    </>
  );
}

export default Icons;
