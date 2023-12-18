"use client";

import { MapPin, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const { coffeesInCart } = useContext(CatalogContext);
  return (
    <header className="flex  max-w-6xl m-auto h-24 items-center justify-between bg-background">
      <Link href="/home">
        <Image src="/imgs/Logo.png" alt="logo tipo" width={85} height={40} />
      </Link>

      <nav className="flex gap-3">
        <div className="flex gap-1 text-purple-dark bg-purple-light py-2.5 px-2  rounded-md ">
          <MapPin />
          <p>Porto Alegre, RS</p>
        </div>

        <Link
          href="/cart"
          className="p-2 rounded-md bg-yellow-light text-yellow-dark"
        >
          <ShoppingCart />
        </Link>
      </nav>
    </header>
  );
}
