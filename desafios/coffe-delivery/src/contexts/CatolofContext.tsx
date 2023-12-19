"use client";
import {
  addToCartAction,
  decrementQuantityAction,
  incrementQuantityAction,
  removeToCartAction,
} from "@/reducers/coffes/actions";
import {
  InitialValueState,
  coffesReducer,
  initialState,
} from "@/reducers/coffes/reducer";
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
  coffeesInCart: Coffee[];
  incrementQuantity: (targetCoffeId: number) => void;
  decrementQuantity: (targetCoffeId: number) => void;
  addToCart: (targetCoffeId: number) => void;
  removeToCart: (targetCoffeId: number) => void;
};

export const CatalogContext = createContext({} as CatalogContextType);

export function CatalogContextProvider({ children }: { children: ReactNode }) {
  const [coffees, dispatch] = useReducer(
    coffesReducer,
    initialState,
    InitialValueState
  );

  const coffeesInCart = coffees.filter((coffe) => coffe.isInCart);

  function incrementQuantity(targetCoffeId: number) {
    dispatch(incrementQuantityAction(targetCoffeId));
  }

  function decrementQuantity(targetCoffeId: number) {
    dispatch(decrementQuantityAction(targetCoffeId));
  }

  function addToCart(targetCoffeId: number) {
    dispatch(addToCartAction(targetCoffeId));
  }

  function removeToCart(targetCoffeId: number) {
    dispatch(removeToCartAction(targetCoffeId));
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const coffeesJSON = JSON.stringify(coffees);
      localStorage.setItem("coffeesInCart", coffeesJSON);
    }
  }, [coffees]);

  return (
    <CatalogContext.Provider
      value={{
        coffees,
        coffeesInCart,
        incrementQuantity,
        decrementQuantity,
        addToCart,
        removeToCart,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
}
