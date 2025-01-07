import { Cart, Error, Home, Login, Register, Restaurant } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/cart", element: <Cart />, errorElement: <Error /> },
  {
    path: "/restaurant/:restaurantId",
    element: <Restaurant />,
    errorElement: <Error />,
  },
  {
    path: "/restaurant/:restaurantId/dashboard",
    element: <Restaurant />,
    errorElement: <Error />,
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
