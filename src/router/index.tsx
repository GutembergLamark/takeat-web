import {
  Cart,
  Error,
  Home,
  Login,
  Register,
  Restaurant,
  RestaurantDashboard,
} from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/cart", element: <Cart />, errorElement: <Error /> },
  {
    path: "/restaurant/:restaurantId",
    element: <Restaurant />,
    errorElement: <Error />,
  },
  {
    element: <ProtectedRoutes />,
    errorElement: <Error />,
    children: [
      {
        path: "/restaurant/:restaurantId/dashboard",
        element: <RestaurantDashboard />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

export default router;
