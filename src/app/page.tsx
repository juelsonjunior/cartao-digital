import { BackCard } from "@/components/Back-card";
import { Formulario } from "@/components/Formulario";
import { FrontCard } from "@/components/Front-card";
import { IconRefresh } from "@tabler/icons-react";
import { IconShieldCheckFilled } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className="bg-slate-950 flex justify-center items-center w-lvw h-lvh">
      <div className="bg-slate-900 p-5 rounded-sm flex flex-col gap-10">
        <div className="flex justify-between gap-10">
          <div className="w-full">
            <Formulario />
          </div>
          <div className="flex flex-col gap-3">
            <FrontCard />
            <div className="flex justify-center items-center flex-col gap-2">
              <IconRefresh stroke={1} />
              <div className="flex gap-1 justify-center items-center">
                <IconShieldCheckFilled stroke={2} color="green" size={15}/>
                <p className="text-xs">Seus dados estão protegidos</p>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full bg-purple-600 py-3">
          Adicionar cartão
        </button>
      </div>
    </div>
  );
}
