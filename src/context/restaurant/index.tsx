/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
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
import { getCookie, removeCookie } from "@/utils/functions";
import ListOrders from "@/@core/domain/usecases/listOrders/listOrders.usecase";

export function RestaurantProvider({ children }: IRestaurantProvider) {
  const localStorageRestaurant = JSON.parse(
    (localStorage.getItem("takeat_restaurant") as string) ?? null,
  );

  const [restaurant, setRestaurant] = useState<Partial<IRestaurant> | null>(
    (localStorageRestaurant ?? null) as IRestaurant | null,
  );
  const [loading, setLoading] = useState<boolean>(false);

  const [errorsLogin, setErrorsLogin] = useState<Partial<Credentials>>(
    {} as Partial<Credentials>,
  );
  const [errorsRegister, setErrorsRegister] = useState<
    Partial<Omit<DataCreateRestaurant, "has_service_tax">>
  >({} as Partial<Omit<DataCreateRestaurant, "has_service_tax">>);

  const navigate = useNavigate();

  const createSession = useMemo(() => new CreateSession(restaurantGateway), []);
  const createRetaurant = useMemo(
    () => new CreateRestaurant(restaurantGateway),
    [],
  );

  const loadRestaurant = useCallback(
    (restaurant: Partial<IRestaurant> | null) => {
      setLoading(true);
      const localRestaurant = localStorage.getItem("takeat_restaurant");
      const parsedRestaurant = localRestaurant
        ? JSON.parse(localRestaurant)
        : null;

      const hasRestaurantInLocalStorage =
        localRestaurant && parsedRestaurant?.id;

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

      setLoading(false);
    },
    [],
  );

  const login = useCallback(
    async (values: Credentials) => {
      const data = await createSession.execute(values);

      if (data?.errors) {
        return setErrorsLogin(data?.errors);
      }

      if (data?.restaurant?.authorization) {
        delete data?.restaurant?.authorization;

        setRestaurant(data?.restaurant);
        setErrorsLogin({});
        return navigate(`/restaurant/${data?.restaurant?.id}/dashboard`);
      }

      setErrorsLogin({});
      return data;
    },
    [createSession, navigate, setErrorsLogin, setRestaurant],
  );

  const logout = () => {
    localStorage.removeItem("takeat_restaurant");
    removeCookie("takeat_authorization");
    setRestaurant(null);
    return navigate("/");
  };

  const register = useCallback(
    async (values: DataCreateRestaurant) => {
      const data = await createRetaurant.execute(values);

      if (data?.errors) {
        return setErrorsRegister(data?.errors);
      }

      if (data?.data?.id) {
        const dataSession = await createSession?.execute({
          email: values?.email,
          password: values?.password,
        });

        if (dataSession?.restaurant?.authorization) {
          setRestaurant(dataSession?.restaurant);
          setErrorsRegister({});
          return navigate(
            `/restaurant/${dataSession?.restaurant?.id}/dashboard`,
          );
        }
      }

      setErrorsRegister({});
      return data;
    },
    [
      createRetaurant,
      createSession,
      navigate,
      setErrorsRegister,
      setRestaurant,
    ],
  );

  const getOrders = useCallback(async () => {
    const authorization = getCookie("takeat_authorization");

    const listOrders = new ListOrders(restaurantGateway);

    return await listOrders?.execute(authorization);
  }, []);

  useLayoutEffect(() => {
    loadRestaurant(restaurant);
  }, [restaurant, loadRestaurant]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        loading,
        login,
        logout,
        register,
        getOrders,
        errorsLogin,
        errorsRegister,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}
