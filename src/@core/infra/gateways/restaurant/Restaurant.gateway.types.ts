export interface RestaurantGateway {
  createRestaurant(data: DataCreateRestaurant): Promise<unknown>;

  createProduct(
    data: DataCreateProduct,
    authorization: string
  ): Promise<unknown>;

  createOrder(data: DataCreateOrder): Promise<unknown>;

  listProducts(id: string): Promise<unknown>;

  listOrders(): Promise<unknown>;

  listRestaurants(): Promise<unknown>;

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

export interface DataCreateOrder {
  product: string;
  phone: string;
  amount: number;
  name?: string;
  restaurant_id: string;
}
