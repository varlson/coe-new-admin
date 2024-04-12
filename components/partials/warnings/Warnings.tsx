import React from "react";

function Warnings({
  text,
  max = 100,
  min = 30,
}: {
  text: string | undefined;
  max?: number;
  min?: number;
}) {
  return (
    <div className=" justify-between mx-4 text-xs flex">
      <p>{`${text?.length}/100`}</p>
      <div>
        {text && text?.length < 30 && (
          <p className="font-bold">
            A quantidade de caracter mínimo requerida é de 20
          </p>
        )}

        {text && text?.length >= 100 && (
          <p className="font-bold">Quantidade de caracter máxima excedida</p>
        )}
      </div>
    </div>
  );
}

export default Warnings;
