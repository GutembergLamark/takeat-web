export interface RestaurantGateway {
  createRestaurant(): Promise<unknown>;

  createProduct(): Promise<unknown>;

  createOrder(): Promise<unknown>;

  listProducts(): Promise<unknown>;

  listOrders(): Promise<unknown>;

  session(credentials: Credentials): Promise<unknown>;
}

export interface Credentials {
  email: string;
  password: string;
}
