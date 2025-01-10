import { ReactNode } from "react";
import { CartProvider } from "./cart";
import { RestaurantProvider } from "./restaurant";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RestaurantProvider>
      <CartProvider>{children}</CartProvider>
    </RestaurantProvider>
  );
}
