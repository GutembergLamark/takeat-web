import { useState } from "react";
import { CartContext } from "./cart.context";
import { ICartProvider, ProductCart } from "./cart.types";

export function CartProvider({ children }: ICartProvider) {
  const [cart, setCart] = useState<Array<ProductCart>>([]);

  function addProduct(item: ProductCart) {
    setCart((oldCart) => [...oldCart, item]);

    return cart;
  }
  function removeProduct(item: ProductCart) {
    const cartRemovedItem = cart.filter((product) => product.id !== item.id);

    setCart(cartRemovedItem);

    return cart;
  }
  function updateAmountProduct(item: ProductCart) {
    const cartUpdated = cart.map((product) =>
      product.id === item.id ? { ...product, amount: item.amount } : product
    );

    setCart(cartUpdated);

    return cart;
  }

  return (
    <CartContext.Provider
      value={{ addProduct, removeProduct, updateAmountProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}
