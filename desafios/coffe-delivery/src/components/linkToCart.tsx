"use client";

import { CatalogContext } from "@/contexts/CatolofContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

export function LinkToCart() {
  const { coffees } = useContext(CatalogContext);
  console.log(coffees);
  return (
    <Link
      href="/cart"
      className="p-2 rounded-md bg-yellow-light text-yellow-dark relative"
    >
      <ShoppingCart />
      <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-yellow-dark text-white rounded-full px-2">
        {coffees.filter((c) => c.isInCart).length}
      </span>
      )
    </Link>
  );
}
