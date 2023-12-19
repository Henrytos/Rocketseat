import logo from "../assets/imgs/logo.png";
import { NewTransactionModal } from "./NewTransactionModal";
import { Summary } from "./Summary";

export function Header() {
  return (
    <header className="h-auto pt-10 w-full bg-gray-900">
      <nav className="flex max-w-6xl justify-between m-auto items-center">
        <div className="flex gap-4">
          <img src={logo} alt="" />
          <span className="font-bold text-2xl">DT Money</span>
        </div>
        <NewTransactionModal />
      </nav>
      <Summary />
    </header>
  );
}
