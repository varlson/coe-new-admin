import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className=" bg-zinc-200 h-screen flex justify-center items-center">
        <div className="w-[80%] bg-white h-[60%] rounded  ">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
