import React from "react";
import { ThreeDots } from "react-loader-spinner";

type SpinnerPropType = {
  color: string;
  sizes: { hei: string; wid: string };
};

function Spinner({ color, sizes }: SpinnerPropType) {
  const { hei, wid } = sizes || { hei: "80", wid: "80" };
  const _color = color || "red";

  return (
    <div>
      <ThreeDots
        visible={true}
        height={hei}
        width={wid}
        color={_color}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Spinner;
