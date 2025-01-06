export default interface RestaurantGateway {
  createRestaurant(): Promise<unknown>;

  createProduct(): Promise<unknown>;

  createOrder(): Promise<unknown>;

  listProducts(): Promise<unknown>;

  listOrders(): Promise<unknown>;

  session(): Promise<unknown>;
}
