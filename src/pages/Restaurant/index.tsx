import { useParams } from "react-router-dom";

export default function Restaurant() {
  const { restaurantId } = useParams();

  return <div>Restaurant {restaurantId}</div>;
}
