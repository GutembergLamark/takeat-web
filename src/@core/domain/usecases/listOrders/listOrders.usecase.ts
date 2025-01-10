/* eslint-disable @typescript-eslint/no-explicit-any */
import { RestaurantGateway } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { IListOrders } from "./listOrders.usecase.types";

export default class ListOrders implements IListOrders {
  constructor(readonly restaurantGateway: RestaurantGateway) {}

  async execute(authorization: string): Promise<any> {
    return await this.restaurantGateway.listOrders(authorization);
  }
}
