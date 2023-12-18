"use client";

import { ReactNode, useReducer, createContext, useEffect } from "react";

export interface Coffee {
  id: number;
  imgSrc: string;
  name: string;
  types: string[];
  description: string;
  price: number;
  quantity: number;
  isInCart: boolean;
}

type CatalogContextType = {
  coffees: Coffee[];
  incrementQuantity: (targetCoffeId: number) => void;
  decrementQuantity: (targetCoffeId: number) => void;
  addToCart: (targetCoffeId: number) => void;
};

export const CatalogContext = createContext({} as CatalogContextType);

interface ActionType {
  type: string;
  payload: {
    targetCoffeId: number;
  };
}

function reducer(state: Coffee[], action: ActionType) {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.map((coffe) => {
        if (action.payload.targetCoffeId == coffe.id) {
          return {
            ...coffe,
            isInCart: true,
          };
        }
        return { ...coffe };
      });

    case "REMOVE_FROM_CART":
      return state.map((coffe) => {
        if (action.payload.targetCoffeId == coffe.id) {
          return {
            ...coffe,
            isInCart: false,
          };
        }
        return { ...coffe };
      });

    case "INCREMENT_QUANTITY":
      return state.map((coffe) => {
        if (action.payload.targetCoffeId == coffe.id) {
          return {
            ...coffe,
            quantity: coffe.quantity + 1,
          };
        }
        return { ...coffe };
      });

    case "DECREMENT_QUANTITY":
      return state.map((coffe) => {
        if (action.payload.targetCoffeId == coffe.id && coffe.quantity > 1) {
          return {
            ...coffe,
            quantity: coffe.quantity - 1,
          };
        }
        return { ...coffe };
      });

    default:
      return state;
  }
}

export function CatalogContextProvider({ children }: { children: ReactNode }) {
  const initialState: Coffee[] = [
    {
      id: 1,
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
      isInCart: false,
    },
    {
      id: 2,
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
      isInCart: false,
    },
    {
      id: 3,
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
      isInCart: false,
    },
    {
      id: 4,
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
      isInCart: false,
    },
    {
      id: 5,
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
      isInCart: false,
    },
    {
      id: 6,
      imgSrc: "/imgs/Type=Expresso.png",
      name: "Expresso Tradicional",
      types: ["tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      quantity: 1,
      isInCart: false,
    },
  ];
  const [coffees, dispatch] = useReducer(reducer, initialState, () => {
    if (
      localStorage.getItem("coffeesInCart") &&
      typeof window !== "undefined"
    ) {
      return JSON.parse(localStorage.getItem("coffeesInCart")!);
    }
    localStorage.setItem("coffeesInCart", JSON.stringify(initialState));
    return initialState;
  });

  function incrementQuantity(targetCoffeId: number) {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { targetCoffeId } });
  }
  function decrementQuantity(targetCoffeId: number) {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { targetCoffeId } });
  }

  function addToCart(targetCoffeId: number) {
    dispatch({ type: "ADD_TO_CART", payload: { targetCoffeId } });
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const coffeesJSON = JSON.stringify(coffees);
      localStorage.setItem("coffeesInCart", coffeesJSON);
    }
  }, [coffees]);

  return (
    <CatalogContext.Provider
      value={{ coffees, incrementQuantity, decrementQuantity, addToCart }}
    >
      {children}
    </CatalogContext.Provider>
  );
}
