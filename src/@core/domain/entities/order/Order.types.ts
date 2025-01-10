export interface IOrder {
  id: string;
  amount: number;
  total_price: number;
  total_service_price: number;
  canceled_at: string | null;
  createdAt: string;
  updatedAt: string;
  product_id: string;
  restaurant_id: string;
  buyer_id: string;
  buyer: IBuyer;
  product: IProduct;
}

export interface IBuyer {
  id: string;
  name: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  value: number;
  canceled_at: string | null;
  createdAt: string;
  updatedAt: string;
  restaurant_id: string;
}
