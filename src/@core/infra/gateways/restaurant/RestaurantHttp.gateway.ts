import HttpClient from "../../adapters/http/Http.types";
import RestaurantGateway from "./Restaurant.gateway.types";

export default class RestaurantHttpGateway implements RestaurantGateway {
  constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {}

  async createRestaurant() {}

  async createProduct() {}

  async createOrder() {}

  async listProducts() {}

  async listOrders() {}

  async session() {}
}
