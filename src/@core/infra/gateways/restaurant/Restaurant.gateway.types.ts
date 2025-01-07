export interface RestaurantGateway {
  createRestaurant(data: DataCreateRestaurant): Promise<unknown>;

  createProduct(
    data: DataCreateProduct,
    authorization: string
  ): Promise<unknown>;

  createOrder(): Promise<unknown>;

  listProducts(): Promise<unknown>;

  listOrders(): Promise<unknown>;

  session(credentials: Credentials): Promise<unknown>;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface DataCreateRestaurant {
  username: string;
  phone: string;
  email: string;
  password: string;
  confirm?: string;
  address: string;
  has_service_tax: boolean | string;
}

export interface DataCreateProduct {
  name: string;
  description: string;
  value: number;
}
