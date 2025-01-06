import FetchAdapter from "../../adapters/http/Fetch.adapter";
import HttpClient from "../../adapters/http/Http.types";
import { Credentials, RestaurantGateway } from "./Restaurant.gateway.types";

export default class RestaurantHttpGateway implements RestaurantGateway {
  constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {}

  async createRestaurant() {}

  async createProduct() {}

  async createOrder() {}

  async listProducts() {}

  async listOrders() {}

  async session(credentials: Credentials) {
    return await this.httpClient.post(
      `${this.baseUrl}/public/login`,
      credentials
    );
  }
}

export const httpClient = new FetchAdapter();

export const restaurantGateway = new RestaurantHttpGateway(
  httpClient,
  import.meta.env.VITE_API_HOST
);
