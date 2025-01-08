import { Outlet } from "react-router-dom";
import { Footer, Header } from "./sections/layouts";
import { Provider } from "./context";

export default function Layout() {
  return (
    <Provider>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}
