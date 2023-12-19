import { EcommercedActionType } from "./reducer";

export function incrementQuantityAction(targetCoffeId: number) {
  return {
    type: EcommercedActionType.INCREMENT_QUANTITY,
    payload: { targetCoffeId },
  };
}
export function decrementQuantityAction(targetCoffeId: number) {
  return {
    type: EcommercedActionType.DECREMENT_QUANTITY,
    payload: { targetCoffeId },
  };
}

export function addToCartAction(targetCoffeId: number) {
  return {
    type: EcommercedActionType.ADD_TO_CART,
    payload: { targetCoffeId },
  };
}

export function removeToCartAction(targetCoffeId: number) {
  return {
    type: EcommercedActionType.REMOVE_FROM_CART,
    payload: { targetCoffeId },
  };
}
