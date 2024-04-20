import React from "react";

function Warnings({
  text,
  max = 100,
  min = 30,
  isError = false,
}: {
  text: string | undefined;
  max?: number;
  min?: number;
  isError: boolean;
}) {
  if (isError) {
    return (
      <div className="text-red700 font-semibold">
        <p>{text}</p>
      </div>
    );
  }

  return (
    <div className=" text-red700 justify-between mx-4 text-xs flex">
      <p>{`${text?.length}/100`}</p>
      <div>
        {text && text?.length < 30 && (
          <p className=" text-red700  font-bold">
            A quantidade de caracter mínimo requerida é de 20
          </p>
        )}

        {text && text?.length >= 100 && (
          <p className="text-red700 font-bold">
            Quantidade de caracter máxima excedida
          </p>
        )}
      </div>
    </div>
  );
}

export default Warnings;
