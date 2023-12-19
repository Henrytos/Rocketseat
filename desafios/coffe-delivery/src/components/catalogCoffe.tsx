"use client";

import { CatalogContext, Coffee } from "@/contexts/CatolofContext";

import { Check, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useContext, Suspense } from "react";

function CardCoffe({ coffe }: { coffe: Coffee }) {
  const { incrementQuantity, decrementQuantity, addToCart } =
    useContext(CatalogContext);
  return (
    <>
      <div
        key={coffe.imgSrc}
        className="flex flex-col items-center h-auto px-6 pb-5 bg-base-card rounded-bl-3xl rounded-tr-3xl"
      >
        <Image
          src={coffe.imgSrc}
          width={120}
          height={120}
          alt={coffe.name}
          className="-translate-y-6"
        />
        <div className="flex gap-1 mb-2">
          {coffe.types.map((type) => (
            <span
              key={coffe.description}
              className="text-yellow-dark bg-yellow-light rounded-full  py-0.5 px-1.5 uppercase font-semibold text-xs"
            >
              {" "}
              {type}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{coffe.name}</h3>
        <p className="text-base-label text-sm text-center mb-8">
          {coffe.description}
        </p>
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-1">
            <p className="text-base-text text-sm">R$</p>
            <p className="text-base-text text-lg font-black">{coffe.price}</p>
          </div>
          <div className="flex items-center bg-base-button gap-3 p-2 rounded">
            <Minus
              size={14}
              color="#4B2995"
              className="cursor-pointer"
              onClick={() => decrementQuantity(coffe.id)}
            />
            <span>{coffe.quantity}</span>
            <Plus
              size={14}
              color="#4B2995"
              className="cursor-pointer"
              onClick={() => incrementQuantity(coffe.id)}
            />
          </div>
          {coffe.isInCart ? (
            <div
              className="bg-purple-dark text-white p-2 rounded cursor-pointer"
              onClick={() => addToCart(coffe.id)}
            >
              <Check />
            </div>
          ) : (
            <div
              className="bg-purple-dark text-white p-2 rounded cursor-pointer"
              onClick={() => addToCart(coffe.id)}
            >
              <ShoppingCart />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function CatalogCoffe() {
  const { coffees } = useContext(CatalogContext);
  return (
    <Suspense fallback={"Carregando..."}>
      <div className="grid grid-cols-4 gap-x-8 gap-y-10">
        {coffees.map((coffe) => (
          <CardCoffe coffe={coffe} key={coffe.id} />
        ))}
      </div>
    </Suspense>
  );
}
