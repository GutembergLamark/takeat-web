import { CartContext } from "./cart.context";
import { ICartProvider } from "./cart.types";

export function CartProvider({ children }: ICartProvider) {
  async function addProduct() {}
  async function removeProduct() {}
  async function updateAmountProduct() {}

  return (
    <CartContext.Provider
      value={{ addProduct, removeProduct, updateAmountProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}
