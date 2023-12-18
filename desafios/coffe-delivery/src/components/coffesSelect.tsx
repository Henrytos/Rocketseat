"use client";

import { CatalogContext, Coffee } from "@/contexts/CatolofContext";
import { Minus, Plus, Trash, Trash2 } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

function CoffeCard({ coffe, key }: { coffe: Coffee; key: number }) {
  const { incrementQuantity, decrementQuantity, removeToCart } =
    useContext(CatalogContext);

  return (
    <div key={coffe.imgSrc} className="flex justify-between">
      <div className="flex gap-5">
        <Image src={coffe.imgSrc} alt={coffe.name} width={64} height={64} />
        <div className="flex flex-col gap-2">
          <h3>{coffe.name}</h3>
          <div className="flex">
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
            <div
              className="flex items-center bg-base-button gap-3 p-2 rounded"
              onClick={() => removeToCart(coffe.id)}
            >
              <Trash2 />
              <p>REMOVER</p>
            </div>
          </div>
        </div>
      </div>
      <h3>{coffe.price}</h3>
    </div>
  );
}

export function CoffesSelect() {
  const { coffeesInCart } = useContext(CatalogContext);

  return (
    <div className="bg-base-card p-10 flex flex-col gap-6">
      {coffeesInCart?.map((coffe) => (
        <CoffeCard key={coffe.id} coffe={coffe} />
      ))}
    </div>
  );
}
