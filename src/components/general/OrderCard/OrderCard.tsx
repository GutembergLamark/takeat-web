import style from "./OrderCard.module.scss";
import { OrderCardProps } from "./OrderCart.types";

export function OrderCard({
  order,
  amount,
  total_service_price,
  product,
  buyer,
}: OrderCardProps) {
  return (
    <article className={style.card}>
      <h3>#{order} Ordem de Serviço</h3>

      <div className={style.card__topic}>
        <h4>Produto</h4>
        <p>
          <span>Nome</span>
          <span>{product?.name}</span>
        </p>
        <p>
          <span>Valor</span>
          <span>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(product?.value)}
          </span>
        </p>
      </div>
      <div className={style.card__topic}>
        <h4>Cliente</h4>
        <p>
          <span>Nome</span>
          <span>{buyer?.name}</span>
        </p>
        <p>
          <span>Telefone</span>
          <span>{buyer?.phone}</span>
        </p>
      </div>

      <div className={style.card__topic}>
        <h4>Geral</h4>
        <p>
          <span>Quantidade</span>
          <span>{amount}</span>
        </p>
        <p>
          <span>Valor total</span>
          <span>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(total_service_price)}
          </span>
        </p>
      </div>
    </article>
  );
}
