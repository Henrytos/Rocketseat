import { useSummaryCart } from "@/hooks/useSummaryCart";
import { formaterCurrency } from "@/utils/formater";

export function SummaryCoffe() {
  const { deliveryPrice, priceFinally, priceTotaProducts } = useSummaryCart();
  return (
    <>
      <div className="space-y-3">
        <p className="flex justify-between font-light text-sm text-base-text">
          Tota de itens{" "}
          <span className="ml-auto">
            {formaterCurrency.format(priceTotaProducts)}
          </span>
        </p>
        <p className="flex justify-between font-light text-sm text-base-text">
          <span>Entrega</span>{" "}
          <span>{formaterCurrency.format(deliveryPrice)}</span>
        </p>
        <p className="flex justify-between font-bold  text-base-text">
          <span>Total</span>
          <span>{formaterCurrency.format(priceFinally)}</span>
        </p>
      </div>
      <button className="w-full bg-yellow font-bold text-white py-3 rounded ">
        <p>confirmar pedido</p>
      </button>
    </>
  );
}
