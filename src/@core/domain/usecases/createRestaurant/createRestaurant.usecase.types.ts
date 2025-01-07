/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataCreateRestaurant } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";

export interface ICreateRestaurant {
  execute(data: DataCreateRestaurant): Promise<any>;
}
