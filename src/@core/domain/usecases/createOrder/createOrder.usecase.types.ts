/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataCreateOrder } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";

export interface ICreateOrder {
  execute(data: DataCreateOrder): Promise<any>;
}
