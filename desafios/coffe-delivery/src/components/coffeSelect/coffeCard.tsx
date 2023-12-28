"use client";
import { CatalogContext, Coffee } from "@/contexts/CatolofContext";
import { formaterCurrency } from "@/utils/formater";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

export function CoffeCard({ coffe, key }: { coffe: Coffee; key: number }) {
  const { incrementQuantity, decrementQuantity, removeToCart } =
    useContext(CatalogContext);

  return (
    <>
      <div key={coffe.imgSrc} className=" flex justify-between">
        <div className="flex gap-5">
          <Image src={coffe.imgSrc} alt={coffe.name} width={64} height={64} />
          <div className="flex flex-col gap-2">
            <h3>{coffe.name}</h3>
            <div className="flex gap-2 items-center">
              <div className="flex items-center bg-base-button gap-3 py-1 px-2 rounded">
                <Minus
                  size={14}
                  color="#4B2995"
                  className="cursor-pointer"
                  onClick={() => decrementQuantity(coffe.id)}
                />
                <p className="text-sm text-base-text">{coffe.quantity}</p>
                <Plus
                  size={14}
                  color="#4B2995"
                  className="cursor-pointer"
                  onClick={() => incrementQuantity(coffe.id)}
                />
              </div>
              <div
                className="flex items-center bg-base-button gap-2 py-1 px-2 rounded"
                onClick={() => removeToCart(coffe.id)}
              >
                <Trash2 size={18} color="#4B2995" />
                <p className="text-sm text-base-text">REMOVER</p>
              </div>
            </div>
          </div>
        </div>
        <h3>{formaterCurrency.format(coffe.price * coffe.quantity)}</h3>
      </div>
      <hr />
    </>
  );
}
