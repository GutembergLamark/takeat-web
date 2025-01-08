import { Credentials } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { RestaurantContext } from "@/context/restaurant/restaurant.context";
import { useContext, useState } from "react";

export default function useFormLoginModel() {
  const [values, setValues] = useState<Credentials>({} as Credentials);
  const { login, errorsLogin: errors } = useContext(RestaurantContext);

  async function onSubmit() {
    await login(values);
  }

  return { setValues, onSubmit, errors };
}
