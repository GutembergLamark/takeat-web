import { IProduct } from "./Product.types";

export default class Product {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly value: number,
    public readonly canceled_at: string | null,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly restaurant_id: string
  ) {}

  toJSON(): IProduct {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      value: this.value,
      canceled_at: this.canceled_at,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      restaurant_id: this.restaurant_id,
    };
  }
}
