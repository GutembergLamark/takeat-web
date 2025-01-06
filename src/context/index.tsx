import { ReactNode } from "react";
import { CartProvider } from "./cart";

export function Provider({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
