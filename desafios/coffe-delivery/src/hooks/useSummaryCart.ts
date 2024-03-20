import { CatalogContext } from "@/contexts/CatolofContext";
import { useContext } from "react";

export function useSummaryCart() {
  const { coffeesInCart } = useContext(CatalogContext);
  const priceTotaProducts = coffeesInCart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const deliveryPrice = 3.5;
  const priceFinally = deliveryPrice + priceTotaProducts;
  return {
    priceTotaProducts,
    deliveryPrice,
    priceFinally,
  };
}
