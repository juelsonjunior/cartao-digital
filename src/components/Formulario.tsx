"use client";
import { useCardContext } from "@/context/cardContext";

export const Formulario = () => {
  const {
    numberCard,
    setNumberCard,
    setNameCard,
    expireCard,
    setExpireCard,
    setCodigoCard,
  } = useCardContext();

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    const limitedValue = value.slice(0, 16); // Limita a 12 números
    const formattedValue = limitedValue.replace(/(\d{4})(?=\d)/g, "$1 "); // Insere espaço a cada 4 dígitos
    setNumberCard(formattedValue); // Atualiza o estado já formatado
  };

  const handleExpireDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    const formattedValue = value
      .replace(/^(\d{2})(\d{1,2})/, "$1/$2")
      .slice(0, 5); // Formata como MM/AA
    setExpireCard(formattedValue); // Atualiza o estado já formatado
  };

  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-xs">
          Numero do cartão
        </label>
        <input
          type="text"
          placeholder="Numero do cartão"
          value={numberCard}
          onChange={handleCardNumberChange}
          className="outline-none border-1 border-gray-400 px-2 py-3 bg-slate-950 text-xs rounded-xs"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-xs">
          Nome do titular
        </label>
        <input
          type="text"
          placeholder="Nome do titular"
          onChange={(e) => setNameCard(e.target.value)}
          className="outline-none border-1 border-gray-400 px-2 py-3 bg-slate-950 text-xs rounded-xs"
        />
      </div>

      <div className="flex justify-between gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-xs">
            Expire
          </label>
          <input
            type="text"
            placeholder="data"
            value={expireCard}
            onChange={handleExpireDateChange}
            className="outline-none border-1 border-gray-400 px-2 py-3 bg-slate-950 text-xs rounded-xs"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-xs">
            Codigo
          </label>
          <input
            type="text"
            placeholder="Codigo"
            onChange={(e) => setCodigoCard(Number(e.target.value))}
            className="outline-none border-1 border-gray-400 px-2 py-3 bg-slate-950 text-xs rounded-xs"
          />
        </div>
      </div>
    </form>
  );
};
