import { Header } from "../components/Header";

import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionsContext";
import { SearchTransaction } from "./components/SearchTransaction";
import { RowTransaction } from "./components/RowTransaction";

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
