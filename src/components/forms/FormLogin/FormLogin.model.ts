import CreateSession from "@/@core/domain/usecases/createSession/createSession.usecase";
import { Credentials } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { restaurantGateway } from "@/@core/infra/gateways/restaurant/RestaurantHttp.gateway";
import { useState } from "react";

export default function useFormLoginModel() {
  const [values, setValues] = useState<Credentials>({} as Credentials);
  const createSession = new CreateSession(restaurantGateway);

  function onSubmit() {
    createSession.execute(values);
    console.log(values);
  }

  return { values, setValues, onSubmit };
}
