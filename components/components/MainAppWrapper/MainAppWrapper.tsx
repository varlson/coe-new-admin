import React from "react";

function MainAppWrapper({ children }: { children: React.ReactNode }) {
  return <div className=" font-nunito m-auto ">{children}</div>;
}

export default MainAppWrapper;
