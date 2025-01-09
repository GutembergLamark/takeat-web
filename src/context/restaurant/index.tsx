/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useState } from "react";
import { RestaurantContext } from "./restaurant.context";
import { IRestaurant, IRestaurantProvider } from "./restaurant.types";
import CreateSession from "@/@core/domain/usecases/createSession/createSession.usecase";
import { useNavigate } from "react-router-dom";
import CreateRestaurant from "@/@core/domain/usecases/createRestaurant/createRestaurant.usecase";
import { restaurantGateway } from "@/@core/infra/gateways/restaurant/RestaurantHttp.gateway";
import {
  Credentials,
  DataCreateRestaurant,
} from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { removeCookie, showToast } from "@/utils/functions";

export function RestaurantProvider({ children }: IRestaurantProvider) {
  const localStorageRestaurant = JSON.parse(
    (localStorage.getItem("takeat_restaurant") as string) ?? null
  );

  const [restaurant, setRestaurant] = useState<Partial<IRestaurant> | null>(
    (localStorageRestaurant ?? null) as IRestaurant | null
  );
  const [loading, setLoading] = useState<boolean>(false);

  const [errorsLogin, setErrorsLogin] = useState<Partial<Credentials>>(
    {} as Partial<Credentials>
  );
  const [errorsRegister, setErrorsRegister] = useState<
    Partial<Omit<DataCreateRestaurant, "has_service_tax">>
  >({} as Partial<Omit<DataCreateRestaurant, "has_service_tax">>);

  const navigate = useNavigate();

  const createSession = new CreateSession(restaurantGateway);
  const createRetaurant = new CreateRestaurant(restaurantGateway);

  useLayoutEffect(() => {
    loadRestaurant(restaurant);
  }, [restaurant]);

  function loadRestaurant(restaurant: Partial<IRestaurant> | null) {
    const localRestaurant = localStorage.getItem("takeat_restaurant");
    const parsedRestaurant = localRestaurant
      ? JSON.parse(localRestaurant)
      : null;

    const hasRestaurantInLocalStorage = localRestaurant && parsedRestaurant?.id;

    if (restaurant && !hasRestaurantInLocalStorage) {
      try {
        localStorage.setItem("takeat_restaurant", JSON.stringify(restaurant));
      } catch (error) {
        console.error("Erro ao salvar no localStorage", error);
      }
    }

    if (hasRestaurantInLocalStorage && !restaurant?.id) {
      setRestaurant(parsedRestaurant);
    }
  }

  async function login(values: Credentials) {
    const data = await createSession.execute(values);

    if (data?.errors) {
      return setErrorsLogin(data?.errors);
    }

    if (data?.restaurant?.authorization) {
      delete data?.restaurant?.authorization;

      setRestaurant(data?.restaurant);
      setErrorsLogin({});
      showToast("success", <p>{data?.message}</p>);
      return navigate(`/restaurant/${data?.restaurant?.id}/dashboard`);
    }

    setErrorsLogin({});
    showToast("error", <p>{data?.message}</p>);
    return data;
  }

  function logout() {
    localStorage.removeItem("takeat_restaurant");
    removeCookie("takeat_authorization");
    setRestaurant(null);
    return navigate("/");
  }

  async function register(values: DataCreateRestaurant) {
    const data = await createRetaurant.execute(values);

    if (data?.errors) {
      return setErrorsRegister(data?.errors);
    }

    if (data?.data?.id) {
      showToast("success", <p>data?.message</p>);

      const dataSession = await createSession?.execute({
        email: values?.email,
        password: values?.password,
      });

      if (dataSession?.restaurant?.authorization) {
        setErrorsRegister({});
        return navigate(`/restaurant/${data?.restaurant?.id}/dashboard`);
      }
    }

    setErrorsRegister({});
    showToast("error", <p>data?.message</p>);
    return data;
  }

  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        loading,
        login,
        logout,
        register,
        errorsLogin,
        errorsRegister,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}
