import { DataCreateOrder } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { CartContext } from "@/context/cart/cart.context";
import { useContext, useState } from "react";
import { FormBuyCartProps } from "./FormBuyCart.types";

export default function useFormBuyCartModel({
  amount,
  product,
}: FormBuyCartProps) {
  const [values, setValues] = useState<Pick<DataCreateOrder, "phone" | "name">>(
    {} as Pick<DataCreateOrder, "phone" | "name">,
  );
  const {
    buyCart,
    errorsCart: errors,
    getRestaurantForCart,
  } = useContext(CartContext);

  async function onSubmit() {
    const restaurant_id = getRestaurantForCart();

    const data: DataCreateOrder = {
      ...values,
      amount,
      product,
      restaurant_id,
    };

    await buyCart(data);
  }

  return {
    setValues,
    onSubmit,
    errors,
  };
}
