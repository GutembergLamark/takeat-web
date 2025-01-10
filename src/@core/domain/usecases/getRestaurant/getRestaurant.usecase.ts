/* eslint-disable @typescript-eslint/no-explicit-any */
import { RestaurantGateway } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { IGetRestaurant } from "./getRestaurant.usecase.types";

export default class GetRestaurant implements IGetRestaurant {
  constructor(readonly restaurantGateway: RestaurantGateway) {}

  async execute(id: string): Promise<any> {
    return await this.restaurantGateway.getRestaurant(id);
  }
}
