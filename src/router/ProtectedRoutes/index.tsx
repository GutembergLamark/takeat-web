import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RestaurantContext } from "@/context/restaurant/restaurant.context";

function ProtectedRoutes() {
  const { restaurant, loading } = useContext(RestaurantContext);

  if (loading) return <span>Carregando</span>;

  return restaurant ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
