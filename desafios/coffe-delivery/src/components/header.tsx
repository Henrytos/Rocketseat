"use client";

import { CatalogContext } from "@/contexts/CatolofContext";
import { MapPin, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export function Header() {
  const { coffeesInCart } = useContext(CatalogContext);
  return (
    <header className="flex static max-w-6xl m-auto h-24 items-center justify-between bg-background">
      <Link href="/">
        <Image src="/imgs/Logo.png" alt="logo tipo" width={85} height={40} />
      </Link>

      <nav className="flex gap-3">
        <div className="flex gap-1 text-purple-dark bg-purple-light py-2.5 px-2  rounded-md ">
          <MapPin />
          <p>Porto Alegre, RS</p>
        </div>

        <Link
          href="/cart"
          className="relative p-2 rounded-md bg-yellow-light text-yellow-dark"
        >
          <ShoppingCart />
          {coffeesInCart.length > 0 && (
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-yellow-dark text-white px-2 rounded-full  font-light">
              {coffeesInCart.length}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
