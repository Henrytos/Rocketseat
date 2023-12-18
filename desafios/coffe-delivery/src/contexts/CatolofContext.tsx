"use client";

import { ReactNode, useReducer, createContext } from "react";

export interface Coffee {
  imgSrc: string;
  name: string;
  types: string[];
  description: string;
  price: number;
  quantity: number;
}

type CatalogContextType = {
  coffees: Coffee[];
};

export const CatalogContext = createContext({} as CatalogContextType);

function reducer(state: Coffee[], action: any) {
  return state;
}

export function CatalogContextProvider({ children }: { children: ReactNode }) {
  const initialState: Coffee[] = [
    {
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
    },
    {
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
    },
    {
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
    },
    {
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
    },
    {
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
    },
    {
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
    },
  ];
  const [coffees, dispatch] = useReducer(reducer, initialState);
  return (
    <CatalogContext.Provider value={{ coffees }}>
      {children}
    </CatalogContext.Provider>
  );
}
