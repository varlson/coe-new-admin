import Logo from "@/components/ui/Logo/Logo";
import UserControl from "@/components/ui/UserControl/UserControl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-dark py-2">
      <div className="text-white w-10/12 m-auto flex justify-between">
        <Logo />
        <UserControl />
      </div>
    </div>
  );
}

export default Navbar;
