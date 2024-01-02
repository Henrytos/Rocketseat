import { Separator } from "@/components/ui/separator";
import { NavLink } from "./nav-link";

import { GoHome } from "react-icons/go";
import { TbToolsKitchen3 } from "react-icons/tb";
import { LuPizza } from "react-icons/lu";

export function Header() {
  return (
    <header className="flex items-center h-16 px-10 gap-6 border-b">
      <div>
        <LuPizza className="w-7 h-7" />
      </div>
      <Separator orientation="vertical" className="h-6" />
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <NavLink to="/">
          <GoHome className="w-5 h-5" />
          Início
        </NavLink>
        <NavLink to="/orders">
          <TbToolsKitchen3 className="w-5 h-5" />
          pedidos
        </NavLink>
      </nav>
    </header>
  );
}
