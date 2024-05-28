import Navbar from "@/components/partials/navbar/Navbar";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <>
        <Navbar />
        {children}
      </>
    </div>
  );
}

export default Layout;
