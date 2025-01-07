/* eslint-disable @typescript-eslint/no-explicit-any */

import { DataCreateProduct } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";

export interface ICreateProduct {
  execute(data: DataCreateProduct, authorization: string): Promise<any>;
}
