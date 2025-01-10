export interface IRestaurant {
  id: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  has_service_tax: boolean;
  canceled_at: string | null;
  createdAt: string;
  updatedAt: string;
}
