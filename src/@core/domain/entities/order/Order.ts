import { IBuyer, IOrder, IProduct } from "./Order.types";

export default class Order {
  constructor(
    public readonly id: string,
    public readonly amount: number,
    public readonly total_price: number,
    public readonly total_service_price: number,
    public readonly canceled_at: string | null,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly buyer: IBuyer,
    public readonly product: IProduct,
  ) {}

  toJSON(): Omit<IOrder, "restaurant_id" | "product_id" | "buyer_id"> {
    return {
      id: this.id,
      amount: this.amount,
      total_price: this.total_price,
      total_service_price: this.total_service_price,
      canceled_at: this.canceled_at,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      buyer: {
        id: this.buyer.id,
        name: this.buyer.name,
        phone: this.buyer.phone,
        createdAt: this.buyer.createdAt,
        updatedAt: this.buyer.updatedAt,
      },
      product: {
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        value: this.product.value,
        canceled_at: this.product.canceled_at,
        createdAt: this.product.createdAt,
        updatedAt: this.product.updatedAt,
        restaurant_id: this.product.restaurant_id,
      },
    };
  }
}
