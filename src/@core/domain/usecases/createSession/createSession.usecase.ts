import {
  Credentials,
  RestaurantGateway,
} from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { ICreateSession } from "./createSession.usecase.types";

export default class CreateSession implements ICreateSession {
  constructor(readonly restaurantGateway: RestaurantGateway) {}

  async execute(credentials: Credentials) {
    return await this.restaurantGateway.session(credentials);
  }
}
