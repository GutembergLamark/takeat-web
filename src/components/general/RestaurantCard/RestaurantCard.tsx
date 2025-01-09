import { Link } from "react-router-dom";
import style from "./RestaurantCard.module.scss";
import { RestaurantCardProps } from "./RestaurantCard.types";

export function RestaurantCard({
  id,
  username,
  email,
  phone,
  address,
  has_service_tax,
}: RestaurantCardProps) {
  return (
    <Link to={`/restaurant/${id}`} className={style.card}>
      <picture>
        <img src="https://placehold.co/400x250" alt={username} />
      </picture>

      <article>
        <h3>{username}</h3>
        <h4>Informaçoes: </h4>

        <p>Email: {email}</p>
        <p>Telefone: {phone}</p>
        <p>Endereço: {address}</p>
        <p>
          Taxa de Serviço: {has_service_tax ? "10%" : "Sem taxa de serviço"}
        </p>
      </article>
    </Link>
  );
}
