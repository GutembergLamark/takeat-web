import { useCallback, useLayoutEffect, useState } from "react";
import { CartContext } from "./cart.context";
import { ICartProvider, ProductCart } from "./cart.types";
import CreateOrder from "@/@core/domain/usecases/createOrder/createOrder.usecase";
import { restaurantGateway } from "@/@core/infra/gateways/restaurant/RestaurantHttp.gateway";
import { DataCreateOrder } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { useNavigate } from "react-router-dom";
import GetRestaurant from "@/@core/domain/usecases/getRestaurant/getRestaurant.usecase";

export function CartProvider({ children }: ICartProvider) {
  const [cartProducts, setCartProducts] = useState<Array<ProductCart>>([]);
  const [errorsCart, setErrorsCart] = useState<
    Partial<Pick<DataCreateOrder, "phone" | "name">>
  >({} as Partial<Pick<DataCreateOrder, "phone" | "name">>);
  const [restaurantPage, setRestaurantPage] = useState<string>("");
  const [restaurantServiceTax, setRestaurantServiceTax] = useState<
    boolean | null
  >(null);

  const navigate = useNavigate();

  const loadCart = useCallback((cartProducts: Array<ProductCart>) => {
    const localCart = localStorage.getItem("takeat_cart");
    const parsedCart = localCart ? JSON.parse(localCart) : null;

    const hasCartInLocalStorage = localCart && parsedCart?.length;

    if (cartProducts.length && !hasCartInLocalStorage) {
      localStorageSet<Array<ProductCart>>("takeat_cart", cartProducts);
    }

    if (hasCartInLocalStorage && !cartProducts?.length) {
      setCartProducts(parsedCart);
    }
  }, []);

  function localStorageSet<T>(name: string, data: T) {
    try {
      localStorage.setItem(name, JSON.stringify(data));
    } catch (error) {
      console.error("Erro ao salvar no localStorage", error);
    }
  }

  const setRestaurantHasTax = useCallback(async (id: string) => {
    const getRestaurant = new GetRestaurant(restaurantGateway);

    const data = await getRestaurant.execute(id);

    if (data?.restaurant) {
      localStorageSet<string>(
        "takeat_restaurant_tax",
        data?.restaurant?.has_service_tax,
      );
      setRestaurantServiceTax(data?.restaurant?.has_service_tax);
    }

    return data;
  }, []);

  function getRestaurantHasTax(): boolean {
    const localTax = localStorage.getItem("takeat_restaurant_tax");
    const parsedTax = localTax ? JSON.parse(localTax) : null;

    if (restaurantServiceTax !== null) return restaurantServiceTax;

    if (parsedTax !== null) return parsedTax;

    return false;
  }

  function setRestaurantForCart(uri: string) {
    setRestaurantPage(uri);
    localStorageSet<string>("takeat_restaurant_page", uri);
  }

  const getRestaurantForCart = useCallback(() => {
    const localPage = localStorage.getItem("takeat_restaurant_page");
    const parsedPage = localPage ? JSON.parse(localPage) : null;

    if (restaurantPage && !parsedPage) {
      localStorageSet<string>("takeat_restaurant_page", restaurantPage);

      return restaurantPage;
    }

    if (parsedPage && !restaurantPage) {
      setRestaurantPage(parsedPage);

      return parsedPage;
    }

    return parsedPage || restaurantPage;
  }, [restaurantPage, setRestaurantPage]);

  function addProduct(item: ProductCart) {
    if (cartProducts.length === 0) {
      setCartProducts((oldCart) => [...oldCart, item]);

      localStorageSet<Array<ProductCart>>("takeat_cart", [
        ...cartProducts,
        item,
      ]);
    }

    return cartProducts;
  }

  function removeProduct(item: ProductCart) {
    const cartRemovedItem = cartProducts.filter(
      (product) => product.id !== item.id,
    );

    setCartProducts(cartRemovedItem);
    localStorageSet<Array<ProductCart>>("takeat_cart", cartRemovedItem);

    return cartProducts;
  }

  function updateAmountProduct(item: ProductCart) {
    const cartUpdated = cartProducts.map((product) =>
      product.id === item.id ? { ...product, amount: item.amount } : product,
    );

    setCartProducts(cartUpdated);
    localStorageSet<Array<ProductCart>>("takeat_cart", cartUpdated);

    return cartProducts;
  }

  const buyCart = useCallback(
    async (values: DataCreateOrder) => {
      const createOrder = new CreateOrder(restaurantGateway);
      const data = await createOrder.execute(values);

      if (data?.errors) {
        return setErrorsCart(data?.errors);
      }

      if (data?.data?.id) {
        setCartProducts([]);
        setErrorsCart({});
        localStorageSet<Array<ProductCart>>("takeat_cart", []);
        return navigate(`/restaurant/${values?.restaurant_id}`);
      }

      setErrorsCart({});
      return data;
    },
    [navigate, setErrorsCart, setCartProducts],
  );

  useLayoutEffect(() => {
    loadCart(cartProducts);
  }, [cartProducts, loadCart]);

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        updateAmountProduct,
        buyCart,
        errorsCart,
        cartProducts,
        getRestaurantForCart,
        setRestaurantForCart,
        setRestaurantHasTax,
        getRestaurantHasTax,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
