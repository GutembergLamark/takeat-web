import { IBuyer, IProduct } from "@/@core/domain/entities/order/Order.types";

export interface OrderCardProps {
  order: number;
  amount: number;
  total_service_price: number;
  product: IProduct;
  buyer: IBuyer;
}
