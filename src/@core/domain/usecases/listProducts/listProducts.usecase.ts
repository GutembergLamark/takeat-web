/* eslint-disable @typescript-eslint/no-explicit-any */
import { RestaurantGateway } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";

import { IListProducts } from "./listProducts.usecase.types";

export default class ListProducts implements IListProducts {
  constructor(readonly restaurantGateway: RestaurantGateway) {}

  async execute(id: string): Promise<any> {
    return await this.restaurantGateway.listProducts(id);
  }
}
