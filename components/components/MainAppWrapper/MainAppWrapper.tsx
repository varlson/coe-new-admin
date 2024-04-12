import React from "react";

function MainAppWrapper({ children }: { children: React.ReactNode }) {
  return <div className=" font-nunito md:w-10/12 m-auto p-2">{children}</div>;
}

export default MainAppWrapper;
