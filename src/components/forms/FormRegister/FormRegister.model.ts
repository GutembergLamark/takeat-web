import CreateRestaurant from "@/@core/domain/usecases/createRestaurant/createRestaurant.usecase";
import { DataCreateRestaurant } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { restaurantGateway } from "@/@core/infra/gateways/restaurant/RestaurantHttp.gateway";
import { useState } from "react";

export default function useFormRegisterModel() {
  const [values, setValues] = useState<DataCreateRestaurant>(
    {} as DataCreateRestaurant
  );
  const [errors, setErrors] = useState<
    Partial<Omit<DataCreateRestaurant, "has_service_tax">>
  >({} as Partial<Omit<DataCreateRestaurant, "has_service_tax">>);
  const createRetaurant = new CreateRestaurant(restaurantGateway);

  async function onSubmit() {
    const data = await createRetaurant.execute(values);

    if (data?.errors) {
      return setErrors(data?.errors);
    }

    setErrors({});
    return data;
  }

  return { setValues, onSubmit, errors };
}
