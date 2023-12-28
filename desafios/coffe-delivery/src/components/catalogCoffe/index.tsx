"use client";
import { Suspense, useContext } from "react";
import { CardCoffe } from "./CardCoffe";
import { CatalogContext } from "@/contexts/CatolofContext";

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
