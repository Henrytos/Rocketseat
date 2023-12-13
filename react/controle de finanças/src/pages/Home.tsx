import { Header } from "../components/Header";
import { DetailsTransactions } from "./components/DetailsTransactions";
import { SearchTransaction } from "./components/SearchTransaction";

export function Home() {
  return (
    <>
      <main className="h-screen  text-gray-100 bg-gray-800">
        <Header />
        <main className="w-full h-[calc(100vh_-_20rem)]  max-w-6xl m-auto  rounded-md font-roboto pt-24">
          <SearchTransaction />
          <DetailsTransactions />
        </main>
      </main>
    </>
  );
}
