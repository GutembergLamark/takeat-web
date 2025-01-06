import { ReactNode } from "react";

export interface ICartContext {
  addProduct(): Promise<unknown>;
  removeProduct(): Promise<unknown>;
  updateAmountProduct(): Promise<unknown>;
}

export interface ICartProvider {
  children: ReactNode;
}
