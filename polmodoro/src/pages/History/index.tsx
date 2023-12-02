import React, { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContexts";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface StatusProps {
  children: React.ReactNode;
}

const Status = ({ children }: StatusProps) => {
  return (
    <>
      <p className="flex gap-1 items-center">
        <span>{children}</span>
      </p>
    </>
  );
};

export default function History() {
  const { cycles } = useContext(CyclesContext);
  return (
    <div className="w-full max-w-5xl m-auto">
      <h1 className="font-extrabold text-2xl pb-8">Meu histórico</h1>
      <table className="min-w-full rounded bg-gray-700 ">
        <thead>
          <tr className="bg-gray-600">
            <th className="py-3 px-4 -b text-sm text-left font-bold">Tarefa</th>
            <th className="py-3 px-4  text-sm text-left font-bold">Duração</th>
            <th className="py-3 px-4  text-sm text-left font-bold">Inicío</th>
            <th className="py-3 px-4  text-sm text-left font-bold">Status</th>
          </tr>
        </thead>
        <tbody>
          {cycles.map((cycle) => (
            <tr key={cycle.startDate.toISOString()}>
              <td className="py-3 px-4 text-sm text-[#C4C4CC] ">
                {cycle.task}
              </td>
              <td className="py-3 px-4 text-sm text-[#C4C4CC] ">
                {cycle.minutesAmount}
              </td>
              <td className="py-3 px-4 text-sm text-[#C4C4CC] ">
                {formatDistanceToNow(cycle.startDate, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </td>
              <td className="py-3 px-4 text-sm text-[#C4C4CC] ">
                {cycle.interruptedDate && <Status>interrupted</Status>}
                {cycle.fineshedDate && <Status>finished</Status>}
                {!cycle.fineshedDate && !cycle.interruptedDate && (
                  <Status>Em andamento</Status>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
