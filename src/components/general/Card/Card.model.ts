import { DefaultModalRef } from "@/components/modals/DefaultModal/DefaultModal.types";
import { CartContext } from "@/context/cart/cart.context";
import { ProductCart } from "@/context/cart/cart.types";
import { useContext, useEffect, useRef, useState } from "react";

export default function useCardModel({
  product,
  noAddCart,
  inCart,
  amountCart,
}: {
  product: Omit<ProductCart, "amount">;
  noAddCart?: boolean;
  inCart?: boolean;
  amountCart?: number;
}) {
  const { addProduct, removeProduct, updateAmountProduct } =
    useContext(CartContext);

  const [amount, setAmount] = useState<number>(inCart ? (amountCart ?? 0) : 0);

  const modalRef = useRef<DefaultModalRef>(null);

  const cardProduct = {
    id: product?.id,
    name: product?.name,
    value: product?.value,
    amount,
    description: product?.description,
  };

  useEffect(() => {
    if (inCart) {
      updateAmountProduct(cardProduct);

      if (amount === 0) {
        removeProduct(cardProduct);
        modalRef?.current?.closeModal();
      }
    }
  }, [amount]);

  const displayAddCart = !noAddCart && !inCart;
  const displayRemoveCart = inCart;
  const displayQuantity = !noAddCart;

  const displayValue =
    product?.value &&
    new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(product?.value);

  const dislpayTotalValue =
    product?.value &&
    new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(product?.value * amount);

  return {
    amount,
    setAmount,
    displayValue,
    dislpayTotalValue,
    modalRef,
    addProduct,
    removeProduct,
    displayAddCart,
    displayRemoveCart,
    displayQuantity,
  };
}
