import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Restaurant from "../pages/Restaurant";
import Error from "../pages/Error";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/cart", element: <Cart />, errorElement: <Error /> },
  {
    path: "/restaurant/:restaurantId",
    element: <Restaurant />,
    errorElement: <Error />,
  },
]);

export default router;
