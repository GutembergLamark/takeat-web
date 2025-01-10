/* eslint-disable @typescript-eslint/no-explicit-any */
import { RestaurantGateway } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { IListRestaurants } from "./listRestaurants.usecase.types";

export default class ListRestaurants implements IListRestaurants {
  constructor(readonly restaurantGateway: RestaurantGateway) {}

  async execute(): Promise<any> {
    return await this.restaurantGateway.listRestaurants();
  }
}
