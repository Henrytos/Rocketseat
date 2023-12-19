import { Header } from "../components/Header";

import search from "../assets/imgs/search.png";
import { useContext } from "react";
import {
  Transaction,
  TransactionContext,
} from "../contexts/TransactionsContext";
import { formaterCurrency, formaterDate } from "../utils/formater";

export function SearchTransaction() {
  return (
    <form action="" className="flex gap-6 justify-between">
      <input
        type="text"
        name=""
        id=""
        className="grow bg-gray-900 rounded py-3 px-4 outline-none text-gray-500 "
        placeholder="Busque uma transação"
      />
      <button
        type="submit"
        className="
        text-green-300 border-[1px] border-green-300 py-3 px-7 rounded
      cursor-pointer
        "
      >
        <img src={search} alt="buscar" className="inline pr-1" />

        <span>Buscar</span>
      </button>
    </form>
  );
}

function RowTransaction({ transaction }: { transaction: Transaction }) {
  return (
    <tr className="h-16 text-gray-300 bg-gray-700 ">
      <td className=" pl-8" width="50%">
        {transaction.description}
      </td>
      <td
        className={`${
          transaction.type == "income" ? "text-green-300" : "text-red-400"
        }`}
      >
        {formaterCurrency.format(transaction.price)}
      </td>
      <td>{transaction.type}</td>
      <td>{formaterDate.format(new Date(transaction.createdAt))}</td>
    </tr>
  );
}

export function Home() {
  const { transactions } = useContext(TransactionContext);

  return (
    <>
      <main className="h-screen  text-gray-100 bg-gray-800">
        <Header />
        <main className="w-full h-[calc(100vh_-_20rem)]  max-w-6xl m-auto  rounded-md font-roboto pt-24">
          <SearchTransaction />
          <table className="w-full mt-6 table-auto">
            <tbody>
              {transactions.map((t) => (
                <RowTransaction transaction={t} key={t.id} />
              ))}
            </tbody>
          </table>
        </main>
      </main>
    </>
  );
}
