import { useLayoutEffect, useState } from "react";
import { CartContext } from "./cart.context";
import { ICartProvider, ProductCart } from "./cart.types";

export function CartProvider({ children }: ICartProvider) {
  const [cartProducts, setCartProducts] = useState<Array<ProductCart>>([]);

  useLayoutEffect(() => {
    loadCart(cartProducts);
  }, [cartProducts]);

  function loadCart(cartProducts: Array<ProductCart>) {
    const localCart = localStorage.getItem("takeat_cart");
    const parsedCart = localCart ? JSON.parse(localCart) : null;

    const hasCartInLocalStorage = localCart && parsedCart?.length;

    if (cartProducts.length && !hasCartInLocalStorage) {
      localStorageSet(cartProducts);
    }

    if (hasCartInLocalStorage && !cartProducts?.length) {
      setCartProducts(parsedCart);
    }
  }

  function localStorageSet(products: Array<ProductCart>) {
    try {
      localStorage.setItem("takeat_cart", JSON.stringify(products));
    } catch (error) {
      console.error("Erro ao salvar no localStorage", error);
    }
  }

  function addProduct(item: ProductCart) {
    if (cartProducts.length === 0) {
      setCartProducts((oldCart) => [...oldCart, item]);

      localStorageSet([...cartProducts, item]);
    }

    return cartProducts;
  }

  function removeProduct(item: ProductCart) {
    const cartRemovedItem = cartProducts.filter(
      (product) => product.id !== item.id
    );

    setCartProducts(cartRemovedItem);
    localStorageSet(cartRemovedItem);

    return cartProducts;
  }

  function updateAmountProduct(item: ProductCart) {
    const cartUpdated = cartProducts.map((product) =>
      product.id === item.id ? { ...product, amount: item.amount } : product
    );

    setCartProducts(cartUpdated);
    localStorageSet(cartUpdated);

    return cartProducts;
  }

  async function buyCart() {
    return;
  }

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        updateAmountProduct,
        buyCart,
        cartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
