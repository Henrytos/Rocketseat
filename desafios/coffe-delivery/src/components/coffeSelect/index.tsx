"use client";

import { CatalogContext } from "@/contexts/CatolofContext";
import { useContext } from "react";
import { CoffeCard } from "./coffeCard";
import { SummaryCoffe } from "./coffeSummary";
import { CardContainer } from "../containerCard";

export function CoffesSelect() {
  const { coffeesInCart } = useContext(CatalogContext);
  const showCoffesInCart = coffeesInCart.toReversed();
  return (
    <CardContainer>
      <div className="flex flex-col gap-6 max-h-80 overflow-y-auto ">
        {showCoffesInCart?.map((coffe) => (
          <CoffeCard key={coffe.id} coffe={coffe} />
        ))}
      </div>
      <SummaryCoffe />
    </CardContainer>
  );
}
