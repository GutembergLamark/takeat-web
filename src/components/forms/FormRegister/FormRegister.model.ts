import { DataCreateRestaurant } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { RestaurantContext } from "@/context/restaurant/restaurant.context";
import { useContext, useState } from "react";

export default function useFormRegisterModel() {
  const [values, setValues] = useState<DataCreateRestaurant>(
    {} as DataCreateRestaurant,
  );
  const { register, errorsRegister: errors } = useContext(RestaurantContext);

  async function onSubmit() {
    await register(values);
  }

  return { setValues, onSubmit, errors };
}
