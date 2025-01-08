import { Outlet } from "react-router-dom";
import { Header } from "./sections/layouts";
import { Provider } from "./context";

export default function Layout() {
  return (
    <Provider>
      <Header />
      <Outlet />
    </Provider>
  );
}
