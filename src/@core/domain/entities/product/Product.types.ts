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
