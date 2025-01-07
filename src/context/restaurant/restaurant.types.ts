import { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRestaurantContext {
  restaurant: any;
  loading: boolean;
}

export interface IRestaurantProvider {
  children: ReactNode;
}
