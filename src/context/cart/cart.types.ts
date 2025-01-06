import { ReactNode } from "react";

export interface ICartContext {
  addProduct(item: ProductCart): Array<ProductCart>;
  removeProduct(item: ProductCart): Array<ProductCart>;
  updateAmountProduct(item: ProductCart): Array<ProductCart>;
}

export interface ICartProvider {
  children: ReactNode;
}

export interface ProductCart {
  id: string;
  name: string;
  value: string;
  amount: string;
  description: string;
}
