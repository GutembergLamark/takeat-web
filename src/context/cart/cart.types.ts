/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataCreateOrder } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { ReactNode } from "react";

export interface ICartContext {
  addProduct(item: ProductCart): Array<ProductCart>;
  removeProduct(item: ProductCart): Array<ProductCart>;
  updateAmountProduct(item: ProductCart): Array<ProductCart>;
  buyCart(values: DataCreateOrder): Promise<any>;
  errorsCart: Partial<Pick<DataCreateOrder, "phone" | "name">>;
  cartProducts: ProductCart[];
  getRestaurantForCart(): string;
  setRestaurantForCart(uri: string): void;
  setRestaurantHasTax(id: string): void;
  getRestaurantHasTax(): boolean;
}

export interface ICartProvider {
  children: ReactNode;
}

export interface ProductCart {
  id: string;
  name: string;
  value: number;
  amount: number;
  description: string;
}
