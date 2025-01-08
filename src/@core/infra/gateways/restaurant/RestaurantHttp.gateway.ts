import { HttpClient } from "../../adapters/http";
import IHttpClient from "../../adapters/http/Http.types";
import {
  Credentials,
  DataCreateProduct,
  DataCreateRestaurant,
  RestaurantGateway,
} from "./Restaurant.gateway.types";

export default class RestaurantHttpGateway implements RestaurantGateway {
  constructor(readonly httpClient: IHttpClient, readonly baseUrl: string) {}

  async createRestaurant(data: DataCreateRestaurant) {
    return await this.httpClient.post(
      `${this.baseUrl}/public/restaurants`,
      data
    );
  }

  async createProduct(data: DataCreateProduct, authorization: string) {
    return this.httpClient.post(`${this.baseUrl}/restaurant/products`, data, {
      Authorization: "Bearer " + authorization,
    });
  }

  async createOrder() {}

  async listProducts(id: string) {
    return this.httpClient.get(`${this.baseUrl}/restaurant/products/${id}`);
  }

  async listOrders() {}

  async session(credentials: Credentials) {
    return await this.httpClient.post(
      `${this.baseUrl}/public/login`,
      credentials
    );
  }
}

export const httpClient = new HttpClient();

export const restaurantGateway = new RestaurantHttpGateway(
  httpClient,
  import.meta.env.VITE_API_HOST
);
