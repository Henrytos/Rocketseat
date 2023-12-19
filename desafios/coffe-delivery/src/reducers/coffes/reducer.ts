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
    imgSrc: "/imgs/Type=Americano.png",
    name: "Expresso Americano",
    types: ["tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 3,
    imgSrc: "/imgs/Type=Expresso Cremoso.png",
    name: "Expresso Cremoso",
    types: ["tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 4,
    imgSrc: "/imgs/Type=Café Gelado.png",
    name: "Expresso Gelado",
    types: ["tradicional", "gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 5,
    imgSrc: "/imgs/Type=Café com Leite.png",
    name: "Café com Leite",
    types: ["tradicional", "com leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 6,
    imgSrc: "/imgs/Type=Latte.png",
    name: "Latte",
    types: ["tradicional", "com leite"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 7,
    imgSrc: "/imgs/Type=Capuccino.png",
    name: "Capuccino",
    types: ["tradicional", "com leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 8,
    imgSrc: "/imgs/Type=Macchiato.png",
    name: "Macchiato",
    types: ["tradicional", "com leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 9,
    imgSrc: "/imgs/Type=Mochaccino.png",
    name: "Mocaccino",
    types: ["tradicional", "com leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 10,
    imgSrc: "/imgs/Type=Chocolate Quente.png",
    name: "Chocolate Quente",
    types: ["tradicional", "com leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 11,
    imgSrc: "/imgs/Type=Cubano.png",
    name: "Cubano",
    types: ["tradicional", "alcoólico", "gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 12,
    imgSrc: "/imgs/Type=Havaiano.png",
    name: "Havaiano",
    types: ["especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 13,
    imgSrc: "/imgs/Type=Árabe.png",
    name: "Árabe",
    types: ["especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.99,
    quantity: 1,
    isInCart: false,
  },
  {
    id: 14,
    imgSrc: "/imgs/Type=Irlandês.png",
    name: "Irlandês",
    types: ["especial", "alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
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
