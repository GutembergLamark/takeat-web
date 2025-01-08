import {
  Credentials,
  DataCreateRestaurant,
} from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRestaurantContext {
  restaurant: Partial<IRestaurant> | null;
  loading: boolean;
  login(values: Credentials): Promise<any>;
  logout(): void;
  register(values: DataCreateRestaurant): Promise<any>;
  errorsLogin: Partial<Credentials>;
  errorsRegister: Partial<Omit<DataCreateRestaurant, "has_service_tax">>;
}

export interface IRestaurantProvider {
  children: ReactNode;
}

export interface IRestaurant {
  id: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  has_service_tax: boolean;
  canceled_at: string | null;
  created_at: string;
  updated_at: string;
}
