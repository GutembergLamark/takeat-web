export interface CardProps {
  id: string;
  name: string;
  description: string;
  value: number;
  amountCart?: number;
  noAddCart?: boolean;
  inCart?: boolean;
}
