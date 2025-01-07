import { useParams } from "react-router-dom";

export function Restaurant() {
  const { restaurantId } = useParams();

  return <div>Restaurant {restaurantId}</div>;
}
