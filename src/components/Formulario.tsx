export const Formulario = () => {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-xs">
          Numero do cartão
        </label>
        <input
          type="text"
          placeholder="Numero do cartão"
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
          className="outline-none border-1 border-gray-400 px-2 py-3 bg-slate-950 text-xs rounded-xs"
        />
      </div>

      <div className="flex justify-between gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-xs">
            Validade
          </label>
          <input
            type="text"
            placeholder="data"
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
            className="outline-none border-1 border-gray-400 px-2 py-3 bg-slate-950 text-xs rounded-xs"
          />
        </div>
      </div>
    </form>
  );
};
