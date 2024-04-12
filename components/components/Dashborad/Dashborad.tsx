import Icons from "@/components/ui/Icons/Icons";
import { IconTypes } from "@/types/types";
import Image from "next/image";
import React from "react";

function Dashborad() {
  return (
    <div className="text-white flex justify-center bg-red900 rounded items-center gap-x-5 gap-y-2">
      <Icons
        src="slides"
        alt=""
        type={IconTypes.Clickable}
        label="Menu1"
        link="/slides"
      />

      <Icons
        src="posts"
        alt=""
        type={IconTypes.Clickable}
        label="Menu2"
        link="/posts"
      />

      <Icons
        src="users"
        alt=""
        type={IconTypes.Clickable}
        label="Menu2"
        link=""
      />

      <Icons
        src="notice"
        alt=""
        type={IconTypes.Clickable}
        label="Menu2"
        link=""
      />
    </div>
  );
}

export default Dashborad;
