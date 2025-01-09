import { IRestaurant } from "./Restaurant.types";

export default class Restaurant {
  constructor(
    public readonly id: string,
    public readonly username: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly address: string,
    public readonly has_service_tax: boolean,
    public readonly canceled_at: string | null,
    public readonly createdAt: string,
    public readonly updatedAt: string
  ) {}

  toJSON(): IRestaurant {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      phone: this.phone,
      address: this.address,
      has_service_tax: this.has_service_tax,
      canceled_at: this.canceled_at,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
