"use client";
import { createContext, useState, ReactNode, useContext } from "react";

interface CardContextType {
  numberCard: string;
  setNumberCard: (numberCard: string) => void;
  nameCard: string;
  setNameCard: (nameCard: string) => void;
  expireCard: string;
  setExpireCard: (expireCard: string) => void;
  codigoCard: number;
  setCodigoCard: (codigoCard: number) => void;
}

export const CardContext = createContext<CardContextType | undefined>(
  undefined
);

// Hook para acessar o contexto
export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext deve ser usado dentro de um CardProvider");
  }
  return context;
};

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [numberCard, setNumberCard] = useState("");
  const [nameCard, setNameCard] = useState("");
  const [expireCard, setExpireCard] = useState("");
  const [codigoCard, setCodigoCard] = useState(0);

  return (
    <CardContext.Provider
      value={{
        numberCard,
        setNumberCard,
        nameCard,
        setNameCard,
        expireCard,
        setExpireCard,
        codigoCard,
        setCodigoCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
