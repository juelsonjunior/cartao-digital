"use client";
import { useCardContext } from "@/context/cardContext";
import { IconSwitchHorizontal } from "@tabler/icons-react";

export const FrontCard = () => {
  const { numberCard, nameCard, expireCard, codigoCard } = useCardContext();
  return (
    <div className="relative w-70 p-4 overflow-hidden shadow-lg rounded-lg">
      <img
        src="https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg"
        className="absolute inset-0 blur-lg flex flex-col gap-10"
      />
      <div className="relative z-10 flex flex-col gap-10 h-full">
        <div className="flex justify-between items-center">
          <img
            src="https://companieslogo.com/img/orig/V.D-e36aebe0.png?t=1720244494"
            className="w-10"
            alt=""
          />
          <IconSwitchHorizontal
            stroke={1}
            className="text-gray-400"
            size={15}
          />
        </div>

        <div className="flex flex-col justify-end h-full gap-5">
          <div className="font-bold">
            {numberCard || "0000 0000 0000 0000"}
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">{nameCard || "Nome do usuario"}</p>
            <p className="text-gray-400">{expireCard || "00/00"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
