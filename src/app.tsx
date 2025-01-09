import { Outlet } from "react-router-dom";
import { Header } from "./sections/layouts";
import { Provider } from "./context";
import { ToastProvider } from "./components/general";

export default function Layout() {
  return (
    <ToastProvider>
      <Provider>
        <Header />
        <Outlet />
      </Provider>
    </ToastProvider>
  );
}
