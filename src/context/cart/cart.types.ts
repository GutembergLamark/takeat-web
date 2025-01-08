/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

export interface ICartContext {
  addProduct(item: ProductCart): Array<ProductCart>;
  removeProduct(item: ProductCart): Array<ProductCart>;
  updateAmountProduct(item: ProductCart): Array<ProductCart>;
  buyCart(item: ProductCart): Promise<any>;
  cartProducts: ProductCart[];
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
