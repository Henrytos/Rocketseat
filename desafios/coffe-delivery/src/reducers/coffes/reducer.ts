import { Coffee } from "@/contexts/CatolofContext";

interface ActionType {
  type: string;
  payload: {
    targetCoffeId: number;
  };
}

export const initialState: Coffee[] = [
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

export enum EcommercedActionType {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  INCREMENT_QUANTITY = "INCREMENT_QUANTITY",
  DECREMENT_QUANTITY = "DECREMENT_QUANTITY",
}

export function coffesReducer(state: Coffee[], action: ActionType) {
  switch (action.type) {
    case EcommercedActionType.ADD_TO_CART:
      return state.map((coffe) => {
        if (action.payload.targetCoffeId == coffe.id) {
          return {
            ...coffe,
            isInCart: true,
          };
        }
        return { ...coffe };
      });

    case EcommercedActionType.REMOVE_FROM_CART:
      return state.map((coffe) => {
        if (action.payload.targetCoffeId == coffe.id) {
          return {
            ...coffe,
            isInCart: false,
          };
        }
        return { ...coffe };
      });

    case EcommercedActionType.INCREMENT_QUANTITY:
      return state.map((coffe) => {
        if (action.payload.targetCoffeId == coffe.id) {
          return {
            ...coffe,
            quantity: coffe.quantity + 1,
          };
        }
        return { ...coffe };
      });

    case EcommercedActionType.DECREMENT_QUANTITY:
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

export function InitialValueState() {
  if (localStorage.getItem("coffeesInCart") && typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("coffeesInCart")!);
  }
  localStorage.setItem("coffeesInCart", JSON.stringify(initialState));
  return initialState;
}
