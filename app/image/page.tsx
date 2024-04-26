import React, { useState } from "react";
import { readFileAsBlob } from "@/util/util";

async function Page() {
  const res = await readFileAsBlob();
  console.log(res);

  return (
    <div>
      <div className="w-8/12 m-auto">
        <form>
          <button className="mt-10 px-4 py-2 bg-emerald-600 rounded text-white">
            Download
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
